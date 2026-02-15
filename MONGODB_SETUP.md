# MongoDB Setup Guide

You have two options for MongoDB:

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

### Step-by-Step:

1. **Go to MongoDB Atlas**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Sign up for a free account

2. **Create a Free Cluster**
   - Click "Build a Database"
   - Choose "M0 FREE" tier
   - Select a cloud provider and region (closest to you)
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `stackora_admin`
   - Password: Generate a secure password (save it!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist Your IP Address**
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add your current IP address
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left menu
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like):
   ```
   mongodb+srv://stackora_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

6. **Update .env File**
   - Open `.env` file in your project
   - Replace `<password>` with your actual password
   - Replace the MONGODB_URI line:
   ```
   MONGODB_URI=mongodb+srv://stackora_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/stackora?retryWrites=true&w=majority
   ```
   - Add `/stackora` before the `?` to specify database name

### Example .env with MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://stackora_admin:MySecurePass123@cluster0.abc123.mongodb.net/stackora?retryWrites=true&w=majority
```

---

## Option 2: Local MongoDB Installation

### Windows:

1. **Download MongoDB**
   - Visit: https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server
   - Run the installer
   - Choose "Complete" installation
   - Install as a Windows Service

2. **Verify Installation**
   ```bash
   mongod --version
   ```

3. **Start MongoDB Service**
   - MongoDB should start automatically as a Windows service
   - Or manually: Open Services → Find "MongoDB" → Start

4. **Use Local Connection**
   - Your `.env` already has the local connection:
   ```
   MONGODB_URI=mongodb://localhost:27017/stackora
   ```

---

## ✅ After MongoDB is Set Up

Continue with these commands:

```bash
# Seed sample data (services, careers, projects)
node backend/scripts/seedData.js

# Create your admin account
node backend/scripts/createAdmin.js

# Start the application
npm run dev
```

---

## 🔍 Verify Connection

When you run `npm run dev`, you should see:
```
✓ MongoDB connected
✓ Server running on port 5000
```

If you see connection errors, check:
- MongoDB Atlas: IP whitelist, correct password, connection string format
- Local MongoDB: Service is running, port 27017 is not blocked

---

## 📊 View Your Database

**MongoDB Atlas:**
- Go to "Database" → Click "Browse Collections"
- You'll see your data after seeding

**Local MongoDB:**
- Download MongoDB Compass: https://www.mongodb.com/products/compass
- Connect to: `mongodb://localhost:27017`
- Browse the `stackora` database

---

## 🆘 Troubleshooting

**"MongoNetworkError: failed to connect"**
- Check internet connection (Atlas)
- Verify MongoDB service is running (Local)
- Check firewall settings

**"Authentication failed"**
- Verify username and password in connection string
- Make sure you created a database user in Atlas

**"IP not whitelisted"**
- Add your IP address in Atlas Network Access
- Or use "Allow Access from Anywhere" for development

---

**Need Help?** Check the main SETUP_GUIDE.md for more details.
