const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    client: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['SaaS', 'Web App', 'AI Tool', 'Automation', 'Dashboard', 'Custom Software']
    },
    tags: [{
        type: String
    }],
    image: {
        type: String
    },
    url: {
        type: String
    },
    technologies: [{
        type: String
    }],
    featured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
