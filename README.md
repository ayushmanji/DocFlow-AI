# 🚀 DocFlow AI

A modern AI-inspired collaborative document workspace built with the MERN Stack. Users can create, edit, manage, upload, and share documents in a clean and responsive interface.

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)
![Render](https://img.shields.io/badge/Backend-Render-purple)

---

## 🌐 Live Demo

### Frontend
https://doc-flow-ai-delta.vercel.app/

### Backend API
https://your-render-backend-url.onrender.com

---

# 📖 Project Overview

DocFlow AI is a cloud-based document management platform that enables users to:

- Create documents instantly
- Edit content in real time
- Share documents with other users
- Upload files to documents
- Store and retrieve data from MongoDB Atlas
- Access documents from anywhere through cloud deployment

The project demonstrates full-stack development skills including frontend development, backend API design, database integration, file handling, and cloud deployment.

---

# ✨ Features

## 📄 Document Management

- Create new documents
- Open existing documents
- Automatic document saving
- Dynamic document titles
- Document ownership tracking

## ✏️ Rich Text Editing

- Bold formatting
- Italic formatting
- Underline formatting
- Heading support
- List support
- Responsive editor layout

## 🤝 Document Sharing

- Share documents using email addresses
- View shared users
- Shared document access management
- Separate "Shared With Me" section

## 📁 File Upload Support

- Upload files directly to documents
- Store file references in MongoDB
- Manage uploaded resources

## ☁️ Cloud Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB Atlas database
- Production-ready architecture

---

# 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend (Vercel)
 │
 ▼
Express REST API (Render)
 │
 ▼
MongoDB Atlas
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Icons

## Backend

- Node.js
- Express.js
- Mongoose
- Multer
- CORS
- dotenv

## Database

- MongoDB Atlas

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```text
DocFlow-AI/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Editor.jsx
│   │
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── models/
│   │   └── Document.js
│   │
│   ├── routes/
│   │   └── documentRoutes.js
│   │
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── vercel.json
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ayushmanji/DocFlow-AI.git

cd DocFlow-AI
```

---

## Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:8080
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=your_mongodb_connection_string

PORT=8080
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/docflow

PORT=8080
```

---

# 📡 API Endpoints

## Create Document

```http
POST /api/documents
```

---

## Get All Documents

```http
GET /api/documents
```

---

## Get Document By ID

```http
GET /api/documents/:id
```

---

## Update Document

```http
PUT /api/documents/:id
```

---

## Share Document

```http
POST /api/documents/:id/share
```

---

## Upload File

```http
POST /api/documents/:id/upload
```

---


# 🚀 Deployment

## Frontend Deployment

Platform:

- Vercel

Build Command:

```bash
npm run build
```

Output Directory:

```text
dist
```

Routing handled using:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Backend Deployment

Platform:

- Render

Start Command:

```bash
node server/server.js
```

Environment Variables:

```env
MONGO_URI=...
PORT=10000
```

---

# 🎯 Challenges Solved

### SPA Routing Issue

Fixed Vercel refresh errors using:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### MongoDB Atlas Connection

Configured secure cloud database connection using environment variables.

### Document Sharing Logic

Implemented user-based sharing using email addresses and shared access lists.

### Cloud Deployment

Successfully deployed a full-stack MERN application using:

- MongoDB Atlas
- Render
- Vercel

---

# 🔮 Future Improvements

- Real-time collaboration using Socket.io
- User authentication (JWT)
- AI-powered document generation
- AI document summarization
- Export to PDF
- Version history
- Rich media embedding
- Notifications system

---

# 👨‍💻 Author

### Ayushman Sharma

Full Stack Developer

GitHub:
https://github.com/ayushmanji

LinkedIn:
https://www.linkedin.com/in/ayushman-sharma-19b9392a8/

---

# ⭐ If you like this project

Give the repository a star and feel free to contribute.
