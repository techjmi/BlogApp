
Blog Website
## Overview
This is a simple blog website built using the MERN stack (MongoDB, Express.js, React, Node.js) and Material UI for the user interface.
## Features

- **User Authentication:** Secure user authentication system.
- **Create and Edit Posts:** Ability to create new blog posts and edit existing ones.
- **Responsive Design:** Material UI components ensure a responsive and user-friendly design.
- **Blog Categories:** Organize your posts by different categories.

## Tech Stack

- **Frontend:**
  - React
  - Material UI
  - Other relevant dependencies

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (using Mongoose for ODM)
  -**Database:**
    -mongodb

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/techjmi/BlogApp.git
   ```

2. Install dependencies:

   ```bash
   cd your-blog-repo
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables.
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_uri
   SECRET_KEY=your_secret_key_for_jwt
   ```
4. Run the application:

   ```bash
   npm start
   ```
   The application should be accessible at `http://localhost:3000` by default.
