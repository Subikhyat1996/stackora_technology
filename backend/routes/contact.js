const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const auth = require('../middleware/auth');

// Email transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Submit contact form
router.post('/', [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('message').notEmpty().trim()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const contact = new Contact(req.body);
        await contact.save();

        // Send email notification
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.ADMIN_EMAIL,
                subject: `New Contact Form Submission - ${req.body.name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${req.body.name}</p>
                    <p><strong>Email:</strong> ${req.body.email}</p>
                    <p><strong>Phone:</strong> ${req.body.phone || 'N/A'}</p>
                    <p><strong>Company:</strong> ${req.body.company || 'N/A'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${req.body.message}</p>
                `
            });
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
        }

        res.status(201).json({ 
            success: true, 
            message: 'Thank you for contacting us! We will get back to you within 24 hours.' 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get all contacts (admin only)
router.get('/', auth, async (req, res) => {
    try {
        const { status } = req.query;
        const filter = status ? { status } : {};
        const contacts = await Contact.find(filter).sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Update contact status (admin only)
router.patch('/:id', auth, async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
