# 🚀 Quick Start Guide - Stackora Technologies

## ✅ What's Already Done

- ✅ Dependencies installed (backend & frontend)
- ✅ .env file created
- ✅ Upload directories created
- ✅ Project structure ready

## 🎯 What You Need to Do Now

### Step 1: Set Up MongoDB (5 minutes)

**Option A: MongoDB Atlas (Recommended - Free & Easy)**

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free account
3. Create a free M0 cluster
4. Create database user (username: `stackora_admin`, set a password)
5. Whitelist IP: Click "Allow Access from Anywhere"
6. Get connection string (looks like):
   ```
   mongodb+srv://stackora_admin:PASSWORD@cluster0.xxxxx.mongodb.net/
   ```
7. Update `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://stackora_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/stackora?retryWrites=true&w=majority
   ```

**Option B: Local MongoDB**
- Download: https://www.mongodb.com/try/download/community
- Install and start MongoDB service
- Keep default `.env` setting: `mongodb://localhost:27017/stackora`

📖 **Detailed instructions**: See `MONGODB_SETUP.md`

---

### Step 2: Seed Sample Data

```bash
node backend/scripts/seedData.js
```

This creates:
- 6 sample services
- 2 sample job postings
- 3 sample projects

---

### Step 3: Create Admin Account

```bash
node backend/scripts/createAdmin.js
```

Follow the prompts:
- Admin Name: Your Name
- Admin Email: admin@stackora.com
- Admin Password: (choose a secure password)
- Role: super-admin

**Save these credentials!** You'll need them to login.

---

### Step 4: Start the Application

```bash
npm run dev
```

This starts both:
- Backend API: http://localhost:5000
- Frontend: http://localhost:3000

---

## 🌐 Access Your Application

### Public Website
- **Home**: http://localhost:3000
- **Services**: http://localhost:3000/services
- **Careers**: http://localhost:3000/careers
- **Contact**: http://localhost:3000/contact

### Admin Panel
- **Login**: http://localhost:3000/admin/login
- Use the credentials you created in Step 3

### API
- **Health Check**: http://localhost:5000/api/health
- **Services**: http://localhost:5000/api/services
- **Careers**: http://localhost:5000/api/careers

---

## 🎨 Customize Your Site

### 1. Update Company Information

Edit `frontend/src/pages/Home.js` and `frontend/src/components/Footer.js`

### 2. Change Brand Colors

Edit `frontend/src/index.css`:
```css
:root {
  --color-accent: #ffd700;  /* Your brand color */
  --color-bg: #0a0a0a;      /* Background */
}
```

### 3. Add/Edit Content

Use the admin panel:
1. Login at http://localhost:3000/admin/login
2. Navigate to Services, Careers, or Projects
3. Add, edit, or delete content

---

## 📧 Email Setup (Optional)

To enable contact form email notifications:

1. Use Gmail with App Password:
   - Enable 2FA on Gmail
   - Generate App Password: https://myaccount.google.com/apppasswords
   
2. Update `.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@stackora.com
   ```

---

## 🐛 Troubleshooting

### "MongoDB connection failed"
- Check your MONGODB_URI in `.env`
- Verify MongoDB Atlas IP whitelist
- Ensure MongoDB service is running (local)

### "Port 3000 already in use"
- Stop other React apps
- Or change port in `frontend/package.json`

### "Port 5000 already in use"
- Change PORT in `.env` file

### Frontend not loading
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 Project Structure

```
stackora-app/
├── backend/              # Node.js API
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth & validation
│   └── scripts/         # Utility scripts
├── frontend/            # React app
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       └── api/         # API client
├── uploads/             # File uploads
└── .env                 # Configuration
```

---

## 🚀 Deployment

### Backend
- Deploy to: Heroku, Railway, Render, or DigitalOcean
- Set environment variables
- Use MongoDB Atlas for database

### Frontend
- Build: `cd frontend && npm run build`
- Deploy to: Vercel, Netlify, or serve from backend

---

## 📚 Documentation

- **Full Setup Guide**: `SETUP_GUIDE.md`
- **MongoDB Setup**: `MONGODB_SETUP.md`
- **API Documentation**: `README_FULLSTACK.md`

---

## 🎯 Features

✅ Modern, responsive design
✅ Dark theme with yellow accents
✅ Dynamic content management
✅ Career listings & applications
✅ Contact form with validation
✅ Admin dashboard
✅ Secure authentication
✅ File upload (resumes)
✅ Email notifications
✅ SEO-friendly
✅ Production-ready

---

## 💡 Tips

- Use MongoDB Atlas for easy cloud database
- Test all features before customizing
- Keep your JWT_SECRET secure
- Regular database backups
- Use strong admin passwords

---

## 🆘 Need Help?

1. Check the error message in terminal
2. Review `SETUP_GUIDE.md` for detailed instructions
3. Check `MONGODB_SETUP.md` for database issues
4. Verify all environment variables in `.env`

---

**Built for Stackora Technologies** 🚀

Ready to build amazing digital products!
