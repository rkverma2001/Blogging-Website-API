# Blogging Website API

This project is a RESTful API for a blog application. The API handles user authentication, CRUD operations for posts, and CRUD operations for comments. This README will guide you through the available endpoints and their purposes.

## Table of Contents
- [Requirements](#requirements)
- [Base URL](#base-url)
- [Authentication Endpoints](#authentication-endpoints)
- [Post Endpoints](#post-endpoints)
- [Comment Endpoints](#comment-endpoints)
- [How to Run Locally](#how-to-run-locally)

## Requirements
- Node.js
- Express
- MongoDB
- JWT for authentication

## Base URL
The API is hosted on Render. All endpoints are prefixed with the following base URL:
```
https://blogging-website-api-hlqn.onrender.com
```

## Authentication Endpoints

### POST /auth/SignUp
**Purpose:** Create a new user.

**Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
**Response:** Confirmation message or user details.

### POST /auth/login
**Purpose:** Authenticate a user and provide a JWT token.

**Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
**Response:** JWT token on successful authentication.

### POST /auth/logout
**Purpose:** Invalidate the current user's session.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## Post Endpoints

### GET /posts
**Purpose:** Retrieve all posts.

**Response:** Array of posts with author details.

### POST /posts
**Purpose:** Create a new post.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "title": "Post Title",
    "content": "Post Content"
}
```
**Response:** Details of the created post.

### GET /posts/:id
**Purpose:** Retrieve a single post by ID.

**Response:** Post details with author information.

### PUT /posts/:id
**Purpose:** Update a post by ID.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "title": "Updated Post Title",
    "content": "Updated Post Content"
}
```
**Response:** Updated post details.

### DELETE /posts/:id
**Purpose:** Delete a post by ID.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## Comment Endpoints

### POST /comments/:postId
**Purpose:** Create a new comment for a specific post.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "content": "Comment Content"
}
```
**Response:** Details of the created comment.

### PUT /comments/:id
**Purpose:** Update a comment by ID.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "content": "Updated Comment Content"
}
```
**Response:** Updated comment details.

### DELETE /comments/:id
**Purpose:** Delete a comment by ID.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## How to Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for JWT secret and MongoDB connection.
4. Start the server using `npm start`.

## Conclusion

This API provides a robust foundation for a blog application, handling user authentication, and CRUD operations for both posts and comments. Ensure you have the necessary environment variables set up and the required dependencies installed to run the application successfully. The API is also available live at `https://blogging-website-api-hlqn.onrender.com`.# Blogging Website API

This project is a RESTful API for a blog application. The API handles user authentication, CRUD operations for posts, and CRUD operations for comments. This README will guide you through the available endpoints and their purposes.

## Table of Contents
- [Requirements](#requirements)
- [Authentication Endpoints](#authentication-endpoints)
- [Post Endpoints](#post-endpoints)
- [Comment Endpoints](#comment-endpoints)

## Requirements
- Node.js
- Express
- MongoDB
- JWT for authentication

## Authentication Endpoints

### POST /auth/SignUp
**Purpose:** Create a new user.

**Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
**Response:** Confirmation message or user details.

### POST /auth/login
**Purpose:** Authenticate a user and provide a JWT token.

**Request Body:**
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
**Response:** JWT token on successful authentication.

### POST /auth/logout
**Purpose:** Invalidate the current user's session.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## Post Endpoints

### GET /posts
**Purpose:** Retrieve all posts.

**Response:** Array of posts with author details.

### POST /posts
**Purpose:** Create a new post.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "title": "Post Title",
    "content": "Post Content"
}
```
**Response:** Details of the created post.

### GET /posts/:id
**Purpose:** Retrieve a single post by ID.

**Response:** Post details with author information.

### PUT /posts/:id
**Purpose:** Update a post by ID.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "title": "Updated Post Title",
    "content": "Updated Post Content"
}
```
**Response:** Updated post details.

### DELETE /posts/:id
**Purpose:** Delete a post by ID.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## Comment Endpoints

### POST /comments/:postId
**Purpose:** Create a new comment for a specific post.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "content": "Comment Content"
}
```
**Response:** Details of the created comment.

### PUT /comments/:id
**Purpose:** Update a comment by ID.

**Headers:** Requires JWT token.

**Request Body:**
```json
{
    "content": "Updated Comment Content"
}
```
**Response:** Updated comment details.

### DELETE /comments/:id
**Purpose:** Delete a comment by ID.

**Headers:** Requires JWT token.

**Response:** Confirmation message.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for JWT secret and MongoDB connection.
4. Start the server using `npm start`.

## Conclusion

This API provides a robust foundation for a blog application, handling user authentication, and CRUD operations for both posts and comments. Ensure you have the necessary environment variables set up and the required dependencies installed to run the application successfully.