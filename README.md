# Health_Management_System

🏥 Health Management System (MERN Stack)
A full-stack web application to log and retrieve personal health data (food intake, exercise routines, etc.) using MongoDB, Express, React, and Node.js.

Table of Contents
Features

Architecture & Tech Stack

Setup & Installation

Usage
![Screenshot (21)](https://github.com/user-attachments/assets/e9c8352b-1067-4bca-b5f0-350bdf9a4bf5)

Data Models & API Endpoints

Future Enhancements

License

✅ Features
Multi-user support

Log food or exercise entries with timestamps

View user entry history

Responsive UI with React

RESTful API powered by Node.js + Express

MongoDB for secure data storage

🧱 Architecture & Tech Stack
Layer	Technology
Frontend	React, Axios (HTTP client), Bootstrap
Backend	Node.js, Express, Mongoose
Database	MongoDB Atlas / Local MongoDB

Component breakdown:

frontend/ — React SPA

backend/ — Express server with API routes

models/ — Mongoose data models

controllers/ — Route handler logic

🚀 Setup & Installation
Prerequisites
Make sure you have:

Node.js (v16+)

npm or Yarn

MongoDB Atlas or Local MongoDB instance

Clone the repo
bash
Copy
Edit
git clone https://github.com/sakshisirsat12/Health_Management_System.git
cd Health_Management_System
Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start server (development mode):

bash
Copy
Edit
npm run dev
Frontend Setup
Open a new terminal:

bash
Copy
Edit
cd frontend
npm install
npm start
Your React app should now be running at http://localhost:3000/.

🛠️ Usage
User Flow
User Selection
Pick or create a user profile (e.g., Nilesh, Shanu).

Log Entry
Enter food or exercise details via the form.

Store
Data is sent to /api/logs and saved with a timestamp.

View History
Retrieve all previous entries via /api/logs/:userId.

🔄 API Endpoints
Models
js
Copy
Edit
// backend/models/Log.js
{
  user: String,
  category: 'food' | 'exercise',
  description: String,
  timestamp: Date
}
Endpoints
POST /api/logs — Log a new entry.

Body: { user, category, description }

GET /api/logs/:user — Retrieve logs for a specific user.

🎯 Next Steps
✅ Add user authentication (JWT, bcrypt)

✅ Improved UX with React Bootstrap or Material-UI

✅ Search and filter logs by date/category

➕ Features: hydration tracking, meditation, weight logs

➕ Mobile app? Try React Native

➕ Deploy: Vercel/Netlify for frontend + Heroku for backend

🧬 Contributing
Fork the repo

Create a feature branch (git checkout -b feature/new-thing)

Commit changes (git commit -am 'Add new feature')

Open a pull request

📄 License
This project is MIT Licensed.

