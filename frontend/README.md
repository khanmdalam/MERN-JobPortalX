<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


# 💼 Job Portal Web Application

## 📌 Project Overview

The Job Portal is a full-stack web application that allows users to search and apply for jobs, while recruiters can post and manage job listings.The platform provides a centralized system to connect job seekers and recruiters efficiently.

The project is split into two apps:

client/ - React frontend built with Vite and Tailwind CSS.
server/ - Express API connected to MongoDB through Mongoose.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login (Authentication)
* Browse available jobs
* Apply for jobs
* View applied jobs

### 🧑‍💼 Recruiter Features

* Recruiter Registration & Login
* Post new job listings
* Update or delete job posts
* View applicants


 ### ⚙️ Backend Features

RESTful API architecture for handling client-server communication
Secure user authentication and authorization
CRUD operations for job postings and applications
Database management using MongoDB
Error handling and input validation for robust performance
Integration with frontend using JSON-based APIs

---

## 🛠️ Tech Stack

### Frontend:

* HTML5
* CSS3
* JavaScript
* React.js

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

---

## 🔗 API Integration

* RESTful APIs for handling user authentication, job posting, and application workflows
* Secure API endpoints with proper validation and error handling
* JSON-based data exchange between frontend and backend
* CRUD operations for managing jobs, users, and applications
* Integration of middleware for authentication and request processing

---

## 📂 Project Structure

```
jobportal-yt/
│
├── backend/
│   ├── controllers/      # Business logic for handling requests
│   ├── middlewares/      # Custom middleware (auth, error handling)
│   ├── models/           # Mongoose schemas and database models
│   ├── routes/           # API route definitions
│   ├── utils/            # Helper functions and utilities
│   ├── .env              # Environment variables
│   ├── .gitignore        # Git ignored files
│   ├── index.js          # Entry point of backend server
│   ├── package.json      # Backend dependencies
│   └── package-lock.json
│
├── frontend/
│   ├── public/           # Static assets
│   ├── src/              # Main React source code
│   ├── node_modules/
│   ├── .gitignore
│   ├── eslint.config.js  # Linting configuration
│   ├── components.json   # UI components config
│   ├── index.html        # Main HTML file
│   ├── jsconfig.json     # Path configuration
│   ├── package.json      # Frontend dependencies
│   ├── package-lock.json
│   ├── postcss.config.js # PostCSS config
│   ├── tailwind.config.js# Tailwind CSS config
│   └── vite.config.js    # Vite configuration
│
└── README.md             # Project documentation
```



---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd jobportal-yt

```

### 2. Install dependencies

#### For backend:

```bash
cd backend
npm install
npm run dev
```

#### For frontend:

```bash
cd frontend
npm install
npm run dev
```

---

### Configure The Backend
Create server/.env:

MONGO_URI="your_URL"
PORT=8000
SECRET_KEY=jobportal_dev_secret_change_in_production_use_long_random_string


CLOUD_NAME="your_Cloud"
API_KEY="your_Api_key"
API_SECRET="your_API_SECRET"


---

### 🔐 Environment Variables
Backend
Variable	Required    	Description
PORT	     No	            Server port (default: 8000)
MONGO_URI	Yes	            MongoDB connection string
SECRET_KEY	Yes	           Secret key for authentication (JWT or session)
CLOUD_NAME	Yes	           Cloudinary cloud name for media uploads
API_KEY  	Yes	            Cloudinary API key
API_SECRET	Yes	            Cloudinary API secret

---



## 🌐 Running the Project

* Backend runs on: http://localhost:8000
* Frontend runs on: http://localhost:5173



## 🎯 Future Improvements

* Real-time notifications for job updates
* Resume upload & profile management system
* Advanced job search & filtering options
* Admin Dashboard for managing users, recruiters, and job listings
* Role-based access control (Admin / Recruiter / User)
* Analytics dashboard (job applications, user activity)

---

## 👨‍💻 Author

Build by Noor Alam
B.Tech CSE Student
Frontend & MERN Stack Developer

---

## 📬 Contact

* GitHub: https://github.com/khanmdalam
* LinkedIn: https://www.linkedin.com/in/noor-alam-96374831b

---
