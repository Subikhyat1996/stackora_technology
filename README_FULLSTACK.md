# Stackora Technologies - Full Stack Application

A complete full-stack web application for Stackora Technologies with backend API, React frontend, and admin dashboard.

## 🏗️ Architecture

```
stackora-app/
├── backend/              # Node.js + Express API
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth & validation
│   └── server.js        # Main server file
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── api/         # API client
│   └── public/
└── uploads/             # File uploads (resumes, images)
```

## 🚀 Features

### Public Website
- Modern landing page with hero section
- Dynamic services showcase
- Career listings with filtering
- Contact form with email notifications
- Project portfolio
- Fully responsive design

### Admin Dashboard
- Secure authentication (JWT)
- Manage services, projects, careers
- View and respond to contact inquiries
- Review job applications
- Upload and manage content

### Backend API
- RESTful API architecture
- MongoDB database
- JWT authentication
- File upload handling
- Email notifications
- Rate limiting & security

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Installation

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/stackora
JWT_SECRET=your_secure_jwt_secret_key_change_this
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@stackora.com
FRONTEND_URL=http://localhost:3000
```

### 3. Create Upload Directories

```bash
mkdir -p uploads/resumes
mkdir -p uploads/projects
```

### 4. Create Initial Admin User

Run this script to create your first admin:

```bash
node backend/scripts/createAdmin.js
```

Or use MongoDB directly:

```javascript
// In MongoDB shell or Compass
db.admins.insertOne({
  name: "Admin",
  email: "admin@stackora.com",
  password: "$2a$12$hashed_password_here", // Use bcrypt to hash
  role: "super-admin",
  isActive: true,
  createdAt: new Date()
})
```

## 🏃 Running the Application

### Development Mode

```bash
# Run both backend and frontend concurrently
npm run dev

# Or run separately:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
cd frontend && npm start
```

### Production Mode

```bash
# Build frontend
cd frontend && npm run build

# Start backend (serves built frontend)
npm start
```

## 📡 API Endpoints

### Public Endpoints
- `GET /api/services` - Get all services
- `GET /api/careers` - Get all careers
- `GET /api/careers/:id` - Get single career
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Submit contact form
- `POST /api/applications` - Submit job application

### Admin Endpoints (Requires Authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/me` - Get current admin
- `POST /api/admin/create` - Create new admin (super-admin only)

### Protected CRUD Endpoints
- Services: `POST, PUT, DELETE /api/services`
- Careers: `POST, PUT, DELETE /api/careers`
- Projects: `POST, PUT, DELETE /api/projects`
- Contacts: `GET, PATCH /api/contact`
- Applications: `GET, PATCH /api/applications`

## 🔐 Security Features

- JWT authentication
- Password hashing with bcrypt
- Rate limiting
- Helmet.js security headers
- CORS configuration
- Input validation
- File upload restrictions

## 📊 Database Models

### Admin
- name, email, password
- role (super-admin, admin, editor)
- isActive, lastLogin

### Service
- title, description, icon
- features, pricing
- isActive, order

### Career
- title, department, location, type
- description, responsibilities, requirements
- salary, isActive, applicationCount

### Application
- career reference
- firstName, lastName, email, phone
- resume, coverLetter, portfolio
- status, notes

### Project
- title, description, client
- category, tags, technologies
- image, url, featured

### Contact
- name, email, phone, company
- message, status, notes

## 🎨 Frontend Pages

- `/` - Home page
- `/services` - Services listing
- `/careers` - Career opportunities
- `/careers/:id` - Career details & application
- `/contact` - Contact form
- `/admin/login` - Admin login
- `/admin/*` - Admin dashboard (protected)

## 📧 Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the app password in `.env`

## 🚀 Deployment

### Backend (Node.js)
- Deploy to Heroku, Railway, Render, or DigitalOcean
- Set environment variables
- Connect to MongoDB Atlas

### Frontend (React)
- Build: `cd frontend && npm run build`
- Deploy to Vercel, Netlify, or serve from backend

### Database
- Use MongoDB Atlas for production
- Set up backups and monitoring

## 📝 TODO / Future Enhancements

- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Newsletter subscription
- [ ] Advanced analytics dashboard
- [ ] Email templates
- [ ] Multi-language support
- [ ] Payment integration
- [ ] Live chat support

## 🤝 Contributing

This is a proprietary application for Stackora Technologies.

## 📄 License

Proprietary - All rights reserved by Stackora Technologies

## 📞 Support

For support, email: support@stackora.com
