
# MERN Authentication Boilerplate – JWT, Email Verification, Private Routes

🚀 A secure authentication system built with the MERN stack (MongoDB, Express, React, Node.js) featuring JWT authentication, email verification, private routes, and Redux Toolkit for state management.




## Features

- ✔ JWT Authentication – Secure login with HTTP-only cookies
- ✔ Email Verification – Verify users via a one-time email link (Link expire in 5 minutes)
- ✔ Private Routing – Restrict access to protected pages
- ✔ Redux Toolkit – Efficient state management for authentication
- ✔ Material-UI – Modern and responsive UI
- ✔ Professional Folder Structure – Scalable & best practi

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux Toolkit, React Router, Material-UI
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Authentication:** HTTP-only cookies, bcrypt, email verification




## Screenshots

![Home Screen](https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes/blob/master/screenshots/homepage.png)

![Signup Page](https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes/blob/master/screenshots/register.png)


![loginpage](https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes/blob/master/screenshots/loginpage.png)

![homepageAfterLogin](https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes/blob/master/screenshots/homepageAfterLogin.png)

![updateprofile](https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes/blob/master/screenshots/updateprofile.png)
## Installation

Install Project with npm

```bash
# Clone the repository
git clone https://github.com/DanialRashid786/MERN-Authentication-Boilerplate-JWT-Email-Verification-Private-Routes.git

# Install dependencies
npm install  # Inside both client & server folders


# Run the application
npm run dev  # Start frontend & backend


```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Client-Side (.env.development & .env.production)`

`📁 Location: client/.env.development`

- VITE_API_BASE_URL="http://localhost:5000"  # Backend API URL (Change in production)
- VITE_PORT=3000  # Port for frontend (default: 3000)
- VITE_HOST=true  # Allow hosting on the local network
- VITE_OPEN=true  # Auto-open browser on start
- REACT_APP_DEBUG=true  # Enable debugging mode in React
- VITE_BUILD_DIR=dist  # Build directory
- VITE_SOURCEMAP=true  # Generate source maps for debugging

`📁 Location: client/.env.production`

- VITE_API_BASE_URL="https://your-production-api.com"  # Change to production backend API
- VITE_PORT=3000
- VITE_HOST=false
- VITE_OPEN=false
- REACT_APP_DEBUG=false
- VITE_BUILD_DIR=dist
- VITE_SOURCEMAP=false  # Disable source maps in production for security


`🖥️ Server-Side (.env, .env.development, & .env.production)`

The backend uses Express.js and MongoDB, and it handles authentication with JWT and email verification.

1️⃣ Global Environment File (server/.env)
- NODE_ENV=development  # Change to "production" when deploying

2️⃣ Development Environment (server/.env.development)

- PORT=5000  # Backend server port
- ORIGIN=http://localhost:3000  # Allowed frontend origin (CORS policy)
- MONGO_URL=mongodb://localhost:27017/mern_auth  # Local MongoDB database

- JWT_SECRET=your_jwt_secret_key_here  # Change to a strong secret key
- JWT_EXPIRES=1d  # Token expiration time

- EMAIL_USER=your-email@example.com  # SMTP email for verification
- EMAIL_PASS=your-email-password  # SMTP password (Use an app password instead of your real password)


3️⃣ Production Environment (server/.env.production)

- PORT=5000
- ORIGIN=https://your-production-frontend.com  # Production frontend domain
- MONGO_URL=mongodb+srv://yourMongoDBURL  # Use MongoDB Atlas or a production DB

- JWT_SECRET=your_strong_production_secret
- JWT_EXPIRES=7d  # Longer expiration for production

- EMAIL_USER=your-production-email@example.com
- EMAIL_PASS=your-production-email-password

`📝 Final Notes`
- ✅ Never commit .env files – Add them to .gitignore
- ✅ Use .env.production in deployment
- ✅ Use process.env.NODE_ENV to differentiate environments

This structure ensures a secure and scalable setup for your MERN Authentication System. 🚀'


