const fs = require('fs');
const path = require('path');

console.log('\n🚀 Stackora Technologies - Startup Check\n');

// Check .env file
if (!fs.existsSync('.env')) {
    console.log('❌ .env file not found!');
    console.log('   Please copy .env.example to .env and configure it.\n');
    process.exit(1);
}

console.log('✅ .env file found');

// Check upload directories
const uploadDirs = ['uploads', 'uploads/resumes', 'uploads/projects'];
uploadDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
    }
});

console.log('✅ Upload directories ready');

// Check MongoDB URI
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri || mongoUri.includes('your-') || mongoUri === 'mongodb://localhost:27017/stackora') {
    console.log('\n⚠️  MongoDB Configuration Needed:');
    console.log('   Your MONGODB_URI is set to default/placeholder.');
    console.log('   \n   Options:');
    console.log('   1. Use MongoDB Atlas (Free Cloud) - See MONGODB_SETUP.md');
    console.log('   2. Install MongoDB locally');
    console.log('   \n   Quick Start with Atlas:');
    console.log('   - Visit: https://www.mongodb.com/cloud/atlas/register');
    console.log('   - Create free cluster');
    console.log('   - Get connection string');
    console.log('   - Update MONGODB_URI in .env file\n');
}

// Check email configuration
const emailUser = process.env.EMAIL_USER;
if (!emailUser || emailUser.includes('your-email')) {
    console.log('⚠️  Email not configured (optional for now)');
    console.log('   Contact form will work but won\'t send email notifications.');
    console.log('   To enable: Update EMAIL_USER and EMAIL_PASS in .env\n');
}

console.log('\n📋 Next Steps:\n');
console.log('1. Configure MongoDB (see MONGODB_SETUP.md)');
console.log('2. Run: node backend/scripts/seedData.js');
console.log('3. Run: node backend/scripts/createAdmin.js');
console.log('4. Run: npm run dev');
console.log('\n✨ Then visit: http://localhost:3000\n');
