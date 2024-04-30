# ChatPDF 

The ChatPDF application is a full-stack web application that integrates a language model to answer questions based on a specific PDF document. Users can ask questions related to the provided PDF document, and the application provides accurate answers by leveraging Retrieval-Augmented Generation (RAG) techniques.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)

## Overview
The goal of this project is to assess the ability to develop a full-stack web application using React for the frontend, Express.js for the backend, and a Language Learning Model (LLM) for answering user questions based on a PDF document. The application allows users to ask questions related to the provided PDF document and retrieves accurate answers using RAG techniques.

## Features
- Parsing of PDF document to extract text content
- Development of a Q/A endpoint using Express.js
- Integration of a Language Learning Model (LLM) to provide accurate answers
- Handling of large context prompts efficiently
- User-friendly chat-based web interface

## Technologies Used
- **Frontend:**
  - React
  - Axios (for making HTTP requests)
- **Backend:**
  - Express.js
  - pdf-parse (for parsing PDF documents)

## Setup and Installation
1. Clone the repository:
   ```
   git clone https://github.com/nimisha218/ChatPDF
   ```
2. Navigate to the project directory:
   ```
   cd chat-pdf-app
   ```
4. Install dependencies for both frontend and backend:
   ```
   npm install
   cd frontend
   npm install
   ```
5. Start the backend server:
   ```
   cd ../backend
   node server.js
   ```
6. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```
7. Access the application in your browser at http://localhost:3000.

   
