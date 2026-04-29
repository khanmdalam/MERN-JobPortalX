
💼 Job Portal Web Application
📌 Project Overview
The Job Portal is a full-stack web application that allows users to search and apply for jobs, while recruiters can post and manage job listings.The platform provides a centralized system to connect job seekers and recruiters efficiently.

The project is split into two apps:

client/ - React frontend built with Vite and Tailwind CSS. server/ - Express API connected to MongoDB through Mongoose.

🚀 Features
👤 User Features
User Registration & Login (Authentication)
Browse available jobs
Apply for jobs
View applied jobs

🧑‍💼 Recruiter Features
Recruiter Registration & Login
Post new job listings
Update or delete job posts
View applicants

⚙️ Backend Features
RESTful API architecture for handling client-server communication Secure user authentication and authorization CRUD operations for job postings and applications Database management using MongoDB Error handling and input validation for robust performance Integration with frontend using JSON-based APIs

🛠️ Tech Stack
Frontend:
HTML5
CSS3
JavaScript
React.js

Backend:
Node.js
Express.js

Database:
MongoDB


🔗 API Integration
RESTful APIs for handling user authentication, job posting, and application workflows
Secure API endpoints with proper validation and error handling
JSON-based data exchange between frontend and backend
CRUD operations for managing jobs, users, and applications
Integration of middleware for authentication and request processing

⚙️ Installation & Setup
1. Clone the repository
git clone <your-repository-url>
cd jobportal-yt

3. Install dependencies
For backend:
cd backend
npm install
npm run dev

For frontend:
cd frontend
npm install
npm run dev

Configure The Backend
Create server/.env:

MONGO_URI="your_URL"
PORT=8000 
SECRET_KEY=jobportal_dev_secret_change_in_production_use_long_random_string

CLOUD_NAME="your_Cloud" 
API_KEY="your_Api_key"
API_SECRET="your_API_SECRET"


🌐 Running the Project
Backend runs on: http://localhost:8000
Frontend runs on: http://localhost:5173

🎯 Future Improvements
Real-time notifications for job updates
Resume upload & profile management system
Advanced job search & filtering options
Admin Dashboard for managing users, recruiters, and job listings
Role-based access control (Admin / Recruiter / User)
Analytics dashboard (job applications, user activity)

👨‍💻 Author
Build by Noor Alam B.Tech CSE Student Frontend & MERN Stack Developer

📬 Contact
GitHub: https://github.com/khanmdalam
LinkedIn: https://www.linkedin.com/in/noor-alam-96374831b
