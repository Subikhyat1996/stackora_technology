const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('../models/Service');
const Career = require('../models/Career');
const Project = require('../models/Project');

const services = [
    {
        title: 'Custom Website Development',
        description: 'Fast, responsive websites built with modern tech and clean code.',
        icon: '🌐',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
        pricing: { startingFrom: 2500, currency: 'USD' },
        order: 1
    },
    {
        title: 'Web Application Development',
        description: 'Full-stack web apps with seamless user experiences.',
        icon: '⚡',
        features: ['Custom Features', 'Scalable Architecture', 'API Integration', 'Real-time Updates'],
        pricing: { startingFrom: 5000, currency: 'USD' },
        order: 2
    },
    {
        title: 'SaaS Product Development',
        description: 'From MVP to scale. Build products users actually want.',
        icon: '🚀',
        features: ['MVP Development', 'User Authentication', 'Payment Integration', 'Analytics'],
        pricing: { startingFrom: 10000, currency: 'USD' },
        order: 3
    },
    {
        title: 'AI Tools & Business Automation',
        description: 'Automate workflows and integrate AI into your operations.',
        icon: '🤖',
        features: ['Process Automation', 'AI Integration', 'Workflow Optimization', 'Custom Solutions'],
        pricing: { startingFrom: 3000, currency: 'USD' },
        order: 4
    },
    {
        title: 'Dashboards, APIs & Integrations',
        description: 'Connect systems, visualize data, and streamline processes.',
        icon: '📊',
        features: ['Data Visualization', 'API Development', 'Third-party Integration', 'Real-time Monitoring'],
        pricing: { startingFrom: 4000, currency: 'USD' },
        order: 5
    },
    {
        title: 'Custom Software Solutions',
        description: 'Tailored solutions for unique business challenges.',
        icon: '💻',
        features: ['Custom Development', 'Legacy Modernization', 'System Integration', 'Ongoing Support'],
        pricing: { startingFrom: 7500, currency: 'USD' },
        order: 6
    }
];

const careers = [
    {
        title: 'Full Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        experience: '3-5 years',
        description: 'We are looking for an experienced Full Stack Developer to join our team and help build amazing digital products.',
        responsibilities: [
            'Develop and maintain web applications',
            'Write clean, maintainable code',
            'Collaborate with design and product teams',
            'Participate in code reviews',
            'Optimize application performance'
        ],
        requirements: [
            '3+ years of full-stack development experience',
            'Strong knowledge of React and Node.js',
            'Experience with MongoDB or PostgreSQL',
            'Understanding of RESTful APIs',
            'Git version control proficiency'
        ],
        benefits: [
            'Competitive salary',
            'Remote work flexibility',
            'Health insurance',
            'Learning budget',
            'Flexible hours'
        ],
        salary: { min: 60000, max: 90000, currency: 'USD' }
    },
    {
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        experience: '2-4 years',
        description: 'Join our design team to create beautiful, user-friendly interfaces for modern digital products.',
        responsibilities: [
            'Design user interfaces for web and mobile',
            'Create wireframes and prototypes',
            'Conduct user research',
            'Collaborate with developers',
            'Maintain design systems'
        ],
        requirements: [
            '2+ years of UI/UX design experience',
            'Proficiency in Figma or similar tools',
            'Strong portfolio',
            'Understanding of design principles',
            'Experience with user research'
        ],
        benefits: [
            'Competitive salary',
            'Remote work',
            'Creative freedom',
            'Latest design tools',
            'Professional development'
        ],
        salary: { min: 50000, max: 75000, currency: 'USD' }
    }
];

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'Modern e-commerce solution with AI-powered recommendations',
        category: 'SaaS',
        tags: ['SaaS', 'E-commerce', 'AI'],
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        featured: true,
        order: 1
    },
    {
        title: 'Business Automation Tool',
        description: 'Workflow automation platform for small businesses',
        category: 'Automation',
        tags: ['Automation', 'Web App'],
        technologies: ['React', 'Python', 'PostgreSQL'],
        featured: true,
        order: 2
    },
    {
        title: 'Analytics Dashboard',
        description: 'Real-time analytics and reporting dashboard',
        category: 'Dashboard',
        tags: ['Dashboard', 'Analytics'],
        technologies: ['React', 'Node.js', 'Chart.js'],
        featured: true,
        order: 3
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/stackora');
        console.log('✓ Connected to MongoDB');

        // Clear existing data
        await Service.deleteMany({});
        await Career.deleteMany({});
        await Project.deleteMany({});
        console.log('✓ Cleared existing data');

        // Insert new data
        await Service.insertMany(services);
        console.log('✓ Inserted services');

        await Career.insertMany(careers);
        console.log('✓ Inserted careers');

        await Project.insertMany(projects);
        console.log('✓ Inserted projects');

        console.log('\n✓ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('✗ Error:', error.message);
        process.exit(1);
    }
}

seedDatabase();
