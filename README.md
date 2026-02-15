# Stackora Technologies - Full Stack Web Application

> A modern, premium, conversion-focused web application for a tech startup that builds custom digital products.

![Status](https://img.shields.io/badge/status-ready-success)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green)
![React](https://img.shields.io/badge/frontend-React-blue)

---

## 🎯 Overview

Complete full-stack application featuring:
- **Public Website**: Modern landing page, services, careers, contact
- **Admin Dashboard**: Secure content management system
- **Backend API**: RESTful API with authentication
- **Database**: MongoDB with complete data models

---

## ✨ Features

### Public Website
- 🎨 Modern, responsive design with dark theme
- 🚀 Dynamic services showcase
- 💼 Career listings with job application system
- 📧 Contact form with email notifications
- 🖼️ Project portfolio
- 📱 Mobile-first responsive design

### Admin Dashboard
- 🔐 Secure JWT authentication
- 📊 Dashboard with statistics
- ✏️ Manage services, careers, projects
- 📋 Review job applications
- 💬 Handle contact inquiries
- 👥 User management

### Backend
- ⚡ RESTful API with Express.js
- 🔒 JWT-based authentication
- 📁 File upload handling (resumes)
- 📧 Email notifications
- 🛡️ Security middleware (Helmet, CORS, Rate limiting)
- ✅ Input validation

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install
cd frontend && npm install && cd ..

# 2. Set up environment
# Copy .env.example to .env and configure
# See MONGODB_SETUP.md for database setup

# 3. Create upload directories (already done)
mkdir uploads uploads/resumes uploads/projects

# 4. Seed sample data
node backend/scripts/seedData.js

# 5. Create admin account
node backend/scripts/createAdmin.js

# 6. Start the application
npm run dev
```

### Access
- **Website**: http://localhost:3000
- **Admin**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api

---

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Fast setup guide (start here!)
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Comprehensive setup instructions
- **[MONGODB_SETUP.md](MONGODB_SETUP.md)** - Database configuration guide
- **[README_FULLSTACK.md](README_FULLSTACK.md)** - Technical documentation

---

## 🏗️ Tech Stack

### Frontend
- React 18
- React Router v6
- Axios
- Framer Motion
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Nodemailer for emails

### Security
- Helmet.js
- CORS
- bcryptjs
- Rate limiting
- Input validation

---

## 📁 Project Structure

```
stackora-app/
├── backend/
│   ├── models/           # Database schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth & validation
│   ├── scripts/          # Utility scripts
│   └── server.js         # Main server
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── api/          # API client
│       └── App.js
├── uploads/              # File uploads
├── .env                  # Environment config
└── package.json
```

---

## 🔌 API Endpoints

### Public
```
GET  /api/services              # Get all services
GET  /api/careers               # Get all careers
GET  /api/careers/:id           # Get single career
GET  /api/projects              # Get all projects
POST /api/contact               # Submit contact form
POST /api/applications          # Submit job application
```

### Admin (Protected)
```
POST   /api/admin/login         # Admin login
GET    /api/admin/me            # Get current admin
POST   /api/services            # Create service
PUT    /api/services/:id        # Update service
DELETE /api/services/:id        # Delete service
# ... and more
```

---

## 🎨 Customization

### Brand Colors
Edit `frontend/src/index.css`:
```css
:root {
  --color-accent: #ffd700;  /* Yellow accent */
  --color-bg: #0a0a0a;      /* Dark background */
}
```

### Content
- Use admin panel to manage services, careers, projects
- Edit `frontend/src/pages/Home.js` for homepage content
- Update `frontend/src/components/Footer.js` for footer

---

## 🚀 Deployment

### Backend
Deploy to Heroku, Railway, Render, or DigitalOcean:
1. Push code to GitHub
2. Connect to deployment platform
3. Set environment variables
4. Deploy

### Frontend
Deploy to Vercel or Netlify:
1. Build: `cd frontend && npm run build`
2. Deploy `frontend/build` folder
3. Set API URL environment variable

### Database
Use MongoDB Atlas (free tier available):
- Create cluster
- Get connection string
- Update MONGODB_URI

---

## 🔒 Security

- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Rate limiting
- ✅ Helmet security headers
- ✅ CORS configuration
- ✅ Input validation
- ✅ File upload restrictions

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Check MONGODB_URI in `.env`
- Verify MongoDB Atlas IP whitelist
- Ensure MongoDB service is running

### Port Conflicts
- Change PORT in `.env` (backend)
- Update port in `frontend/package.json` (frontend)

### Email Not Sending
- Verify EMAIL_USER and EMAIL_PASS
- Use Gmail App Password
- Check Gmail security settings

---

## 📊 Database Models

- **Admin** - Admin users with roles
- **Service** - Service offerings
- **Career** - Job postings
- **Application** - Job applications with resume upload
- **Project** - Portfolio projects
- **Contact** - Contact form submissions

---

## 🎯 Roadmap

- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Newsletter subscription
- [ ] Advanced analytics
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Live chat

---

## 📄 License

Proprietary - All rights reserved by Stackora Technologies

---

## 🤝 Support

For questions or issues:
- Check documentation files
- Review error messages in terminal
- Verify environment configuration

---

## 🌟 Features Highlight

✅ **Production Ready** - Secure, scalable architecture
✅ **Modern UI** - Clean, professional design
✅ **Fully Responsive** - Works on all devices
✅ **SEO Friendly** - Optimized for search engines
✅ **Easy to Customize** - Well-structured code
✅ **Admin Panel** - Complete content management
✅ **Career System** - Job postings & applications
✅ **Contact System** - Form with email notifications

---

**Built with ❤️ for Stackora Technologies**

*We build custom digital products. Web • SaaS • AI • Automation*
