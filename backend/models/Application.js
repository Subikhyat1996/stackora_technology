const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    career: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Career',
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    coverLetter: {
        type: String
    },
    portfolio: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
    experience: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['submitted', 'reviewing', 'shortlisted', 'interview', 'rejected', 'hired'],
        default: 'submitted'
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
