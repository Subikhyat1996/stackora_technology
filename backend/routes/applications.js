const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const Career = require('../models/Career');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resumes/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only PDF and DOC files are allowed'));
    }
});

// Submit application
router.post('/', upload.single('resume'), [
    body('firstName').notEmpty().trim(),
    body('lastName').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('phone').notEmpty().trim(),
    body('career').notEmpty()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Resume is required' });
        }

        const application = new Application({
            ...req.body,
            resume: req.file.path
        });

        await application.save();

        // Increment application count
        await Career.findByIdAndUpdate(req.body.career, {
            $inc: { applicationCount: 1 }
        });

        res.status(201).json({ 
            success: true, 
            message: 'Application submitted successfully',
            data: application 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get all applications (admin only)
router.get('/', auth, async (req, res) => {
    try {
        const { status, career } = req.query;
        const filter = {};
        
        if (status) filter.status = status;
        if (career) filter.career = career;

        const applications = await Application.find(filter)
            .populate('career', 'title department')
            .sort({ createdAt: -1 });

        res.json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Update application status (admin only)
router.patch('/:id/status', auth, async (req, res) => {
    try {
        const { status, notes } = req.body;
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status, notes },
            { new: true }
        ).populate('career');

        if (!application) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

        res.json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
