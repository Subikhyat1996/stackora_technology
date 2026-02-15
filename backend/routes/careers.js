const express = require('express');
const router = express.Router();
const Career = require('../models/Career');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// Get all active careers
router.get('/', async (req, res) => {
    try {
        const careers = await Career.find({ isActive: true }).sort({ createdAt: -1 });
        res.json({ success: true, data: careers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get single career
router.get('/:id', async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found' });
        }
        res.json({ success: true, data: career });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Create career (admin only)
router.post('/', auth, [
    body('title').notEmpty().trim(),
    body('department').notEmpty(),
    body('location').notEmpty(),
    body('type').notEmpty(),
    body('description').notEmpty()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const career = new Career(req.body);
        await career.save();
        res.status(201).json({ success: true, data: career });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Update career (admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const career = await Career.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found' });
        }
        res.json({ success: true, data: career });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete career (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found' });
        }
        res.json({ success: true, message: 'Career deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
