# Simple React Authentication App

This is a simple React authentication app that allows users to register, log in, and log out. The home page is accessible only after login. This project does not use any external dependencies and relies only on JSX and CSS.

## Features

- User registration
- User login
- Home page access only after authentication
- Logout functionality
- Authentication state stored in `localStorage`

## API Endpoint

This project uses the following API for authentication:

🔗 **API Endpoint:** [jsonServer](https://jsonserver-1-etxz.onrender.com/users)

## Installation & Setup

### Install Dependencies

```bash
npm install
```

### Run Project

```bash
npm run dev
```

## How It Works

1. **Register:** Users can register by providing a unique username and password. The credentials are stored in the API.
2. **Login:** Users enter their credentials, and authentication is validated against the API.
3. **Home Page:** Once logged in, users can access the home page.
4. **Logout:** Clicking the logout button clears authentication and redirects to the login page.

## Technologies Used

- React (JSX only)
- CSS for styling
- Fetch API for HTTP requests
- JSON Server API for user authentication
