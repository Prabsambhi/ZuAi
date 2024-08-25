# MERN Blog Application

# Overview
This project is a MERN stack blog application featuring a responsive design and RESTful API. The application includes functionalities for managing blog posts, including creating, updating, deleting, and viewing posts.

# Features

## Backend

**RESTful API**: Implements the following endpoints:

 - GET /posts - List all posts
 - GET /posts/:id - Get a specific post
 - POST /posts - Create a new post
 - PUT /posts/:id - Update a post
 - DELETE /posts/:id - Delete a post
 - Database Model: Utilizes **MongoDb** to store blog posts.
 - Error Handling & Validation: Basic error handling and input validation are implemented to ensure data integrity and provide feedback.

# Frontend
Responsive Layout: Includes a header, main content area, and footer designed to be responsive and user-friendly.

# Blog Post Views:

 - List View: Displays a list of blog posts with title and excerpt.
 - Detail View: Shows detailed content for individual blog posts.
 - Add Blog Post Form: Allows users to create new blog posts with client-side validation.
 - Edit Blog Post Form: Allows users to edit blog posts with client-side validation.

# Deployment

Both frontend and backend are deployed separately. 
https://zuai-a9s8.onrender.com/

# Known Issues
**Deployment Issue**: Currently facing an issue where the frontend is not receiving data from the backend. This might be due to incorrect API endpoint configurations or CORS issues.

## Here are some screenshots of the application

## Homepage
<img width="945" alt="homePage" src="https://github.com/user-attachments/assets/db79cdf0-dd82-499b-a9e6-5229d2901200">

## Add blog page
<img width="942" alt="addBlog" src="https://github.com/user-attachments/assets/1c4c3c8b-c2ac-46fd-9625-42c31cc93d36">

## Edit blog page
<img width="937" alt="edit " src="https://github.com/user-attachments/assets/1e5583fe-dfdd-42f7-aa65-49c902bbfc5e">

## Delete
<img width="938" alt="delete" src="https://github.com/user-attachments/assets/5c43431c-4133-4cca-a487-a009ecd9718a">

## Blog details

![localhost_5173_post-details_66ca435d73dcda87c2eea496](https://github.com/user-attachments/assets/a440cbd8-d48f-47e8-ae0e-58bf1ecd0c01)

