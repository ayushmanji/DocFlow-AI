# Architecture Note – DocFlow AI

## Overview

DocFlow AI is a full-stack collaborative document management platform built using the MERN stack.

The application allows users to:

* Create documents
* Edit rich text content
* Upload files
* Share documents with other users
* Persist document data in MongoDB Atlas

## Frontend

Technologies:

* React.js
* React Router
* Axios
* Tailwind CSS

Responsibilities:

* Render document dashboard
* Provide rich text editing experience
* Handle sharing workflows
* Manage API communication

## Backend

Technologies:

* Node.js
* Express.js
* Mongoose

Responsibilities:

* Document CRUD operations
* Sharing management
* File upload processing
* Database interactions

## Database

MongoDB Atlas stores:

* Document metadata
* Document content
* Sharing permissions
* Uploaded file references

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* MongoDB Atlas

## Prioritization Decisions

Given the 4–6 hour time limit, priority was placed on:

1. End-to-end document workflow
2. Persistent storage
3. Sharing functionality
4. Deployment

The following features were intentionally deferred:

* Real-time collaboration
* User authentication
* Version history
* Comments
* Export to PDF

These could be added in future iterations.
