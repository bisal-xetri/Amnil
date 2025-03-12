# Vite Vanilla JS Project

This is a simple user registration and login system built using **Vite** and **Vanilla JavaScript**. The project includes:

- User registration with validation.
- User login with authentication.
- Dynamic display of user details on the index page.
- Logout functionality.

## Features

### Registration

- Users can register by providing their name, username, email, and password.
- Form validation ensures all fields are filled, passwords match, and email is valid.
- Checks for duplicate usernames and emails.

### Login

- Users can log in using their username and password.
- Successful login redirects to the index page.

### Index Page

- Displays the logged-in user's details (name, username, email).
- Includes a logout button to clear the session.

### JSON Server

- The backend is powered by `json-server`, which simulates a REST API for user data.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

### Install Dependencies

```bash
npm install
```

### Start JSON Server

Open a new terminal and run:

```bash
npx json-server --watch db.json --port 3001
```

### Start the Vite Development Server

In the project root directory, run:

```bash
npm run dev
```

## Key Files

- `index.html`: The main page that displays user details after login.
- `login.html`: The login page where users can log in.
- `Register.html`: The registration page where users can create an account.
- `src/register.js`: Handles user registration and form validation.
- `src/login.js`: Handles user login and authentication.
- `src/script.js`: Handles the display of user details and logout functionality on the index page.
- `db.json`: The JSON file used by json-server to store user data.
- `vite.config.js`: Configuration file for Vite.

## Technologies Used

- **Vite**: A fast build tool for modern web development.
- **Vanilla JavaScript**: Plain JavaScript without any frameworks.
- **JSON Server**: A fake REST API for prototyping and testing.
