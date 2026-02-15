# Stackora Technologies - Complete Setup Guide

## 📦 What You Have

A complete full-stack web application with:
- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React with modern UI
- **Admin Panel**: Secure dashboard for content management
- **Features**: Services, Careers, Projects, Contact forms, Job applications

## 🚀 Quick Start (5 Minutes)

### Step 1: Install MongoDB

**Windows:**
```bash
# Download from: https://www.mongodb.com/try/download/community
# Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
```

**Alternative - Use MongoDB Atlas (Recommended):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Use it in `.env` file

### Step 2: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Step 3: Configure Environment

Create `.env` file in root directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/stackora
JWT_SECRET=stackora_secret_key_2025_change_this_in_production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@stackora.com
FRONTEND_URL=http://localhost:3000
```

### Step 4: Create Upload Folders

```bash
mkdir uploads
mkdir uploads\resumes
mkdir uploads\projects
```

### Step 5: Seed Database (Optional but Recommended)

```bash
node backend/scripts/seedData.js
```

This creates sample services, careers, and projects.

### Step 6: Create Admin User

```bash
node backend/scripts/createAdmin.js
```

Follow the prompts to create your admin account.

### Step 7: Start the Application

```bash
# Start both backend and frontend
npm run dev
```

Or run separately:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
cd frontend
npm start
```

## 🌐 Access Your Application

- **Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an "App Password"
4. Use this password in `.env` as `EMAIL_PASS`

## 🔐 Default Admin Credentials

After running `createAdmin.js`, use the credentials you created.

Example:
- Email: admin@stackora.com
- Password: (what you set)

## 📊 Database Structure

The application uses these collections:
- `admins` - Admin users
- `services` - Service offerings
- `careers` - Job postings
- `applications` - Job applications
- `projects` - Portfolio projects
- `contacts` - Contact form submissions

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Run both frontend & backend
npm run server           # Run backend only
npm run client           # Run frontend only

# Database
node backend/scripts/seedData.js      # Seed sample data
node backend/scripts/createAdmin.js   # Create admin user

# Production
cd frontend && npm run build          # Build frontend
npm start                             # Start production server
```

## 📁 Project Structure

```
stackora-app/
├── backend/
│   ├── models/           # Database schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth middleware
│   ├── scripts/          # Utility scripts
│   └── server.js         # Main server
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── api/          # API client
│       └── App.js        # Main app
├── uploads/              # File uploads
├── .env                  # Environment variables
└── package.json          # Dependencies
```

## 🎨 Customization

### Change Brand Colors

Edit `frontend/src/index.css`:

```css
:root {
  --color-accent: #ffd700;  /* Change to your brand color */
  --color-bg: #0a0a0a;      /* Background color */
}
```

### Update Company Info

Edit content in:
- `frontend/src/pages/Home.js`
- `frontend/src/components/Footer.js`

### Add/Edit Services

Use the admin panel or directly in MongoDB:
- Login to admin panel
- Navigate to Services section
- Add/Edit/Delete services

## 🚀 Deployment

### Backend (Heroku/Railway/Render)

1. Push code to GitHub
2. Connect to deployment platform
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)

1. Build: `cd frontend && npm run build`
2. Deploy `frontend/build` folder
3. Set API URL environment variable

### Database (MongoDB Atlas)

1. Create cluster on MongoDB Atlas
2. Get connection string
3. Update `MONGODB_URI` in production

## 🔒 Security Checklist

- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Use MongoDB Atlas with authentication
- [ ] Enable HTTPS in production
- [ ] Set strong admin passwords
- [ ] Configure CORS properly
- [ ] Enable rate limiting
- [ ] Regular backups

## 📝 API Documentation

### Public Endpoints

```
GET  /api/services              # Get all services
GET  /api/careers               # Get all careers
GET  /api/careers/:id           # Get single career
GET  /api/projects              # Get all projects
POST /api/contact               # Submit contact form
POST /api/applications          # Submit job application
```

### Admin Endpoints (Requires JWT Token)

```
POST   /api/admin/login         # Admin login
GET    /api/admin/me            # Get current admin
POST   /api/services            # Create service
PUT    /api/services/:id        # Update service
DELETE /api/services/:id        # Delete service
POST   /api/careers             # Create career
PUT    /api/careers/:id         # Update career
DELETE /api/careers/:id         # Delete career
GET    /api/applications        # Get all applications
PATCH  /api/applications/:id    # Update application status
GET    /api/contact             # Get all contacts
PATCH  /api/contact/:id         # Update contact status
```

## 🐛 Troubleshooting

### MongoDB Connection Error

```bash
# Make sure MongoDB is running
# Windows: Check Services for "MongoDB"
# Or use MongoDB Atlas connection string
```

### Port Already in Use

```bash
# Change PORT in .env file
PORT=5001
```

### Email Not Sending

- Check Gmail app password
- Verify EMAIL_USER and EMAIL_PASS in .env
- Check Gmail security settings

### Frontend Not Loading

```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions:
- Email: support@stackora.com
- Check logs in terminal
- Review error messages

## 🎯 Next Steps

1. ✅ Complete setup
2. ✅ Create admin account
3. ✅ Seed sample data
4. ✅ Test all features
5. 📝 Customize content
6. 🎨 Update branding
7. 🚀 Deploy to production

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)

---

**Built with ❤️ for Stackora Technologies**
