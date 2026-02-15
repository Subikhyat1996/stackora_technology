const mongoose = require('mongoose');
const readline = require('readline');
require('dotenv').config();

const Admin = require('../models/Admin');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdmin() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/stackora');
        console.log('✓ Connected to MongoDB');

        // Get admin details
        const name = await question('Admin Name: ');
        const email = await question('Admin Email: ');
        const password = await question('Admin Password: ');
        const role = await question('Role (super-admin/admin/editor) [admin]: ') || 'admin';

        // Check if admin exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            console.log('✗ Admin with this email already exists');
            process.exit(1);
        }

        // Create admin
        const admin = new Admin({
            name,
            email,
            password,
            role
        });

        await admin.save();
        console.log('✓ Admin created successfully!');
        console.log(`  Name: ${admin.name}`);
        console.log(`  Email: ${admin.email}`);
        console.log(`  Role: ${admin.role}`);

        process.exit(0);
    } catch (error) {
        console.error('✗ Error:', error.message);
        process.exit(1);
    }
}

createAdmin();
