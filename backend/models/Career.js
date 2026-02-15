const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        enum: ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Operations']
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
    },
    experience: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    responsibilities: [{
        type: String
    }],
    requirements: [{
        type: String
    }],
    benefits: [{
        type: String
    }],
    salary: {
        min: Number,
        max: Number,
        currency: {
            type: String,
            default: 'USD'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    applicationCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Career', careerSchema);
