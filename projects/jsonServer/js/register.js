document
  .querySelector(".btn-register")
  .addEventListener("click", async function (e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector("#name").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#cpassword").value;

    // Validate form inputs
    if (
      !(await validateForm(name, username, email, password, confirmPassword))
    ) {
      return;
    }

    // Create user object
    const user = createUserObject(name, username, email, password);

    // Register user
    registerUser(user);
  });

// Function to validate form inputs
async function validateForm(name, username, email, password, confirmPassword) {
  // Check if all fields are filled
  if (!name || !username || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  // Validate email format
  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  // Check if username or email already exists
  const isUsernameTaken = await checkIfUsernameExists(username);
  if (isUsernameTaken) {
    alert("Username is already taken. Please choose a different username.");
    return false;
  }

  const isEmailTaken = await checkIfEmailExists(email);
  if (isEmailTaken) {
    alert("Email is already registered. Please use a different email.");
    return false;
  }

  return true; // Validation passed
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to create a user object
function createUserObject(name, username, email, password) {
  return {
    name,
    username,
    email,
    password,
  };
}

// Function to check if username already exists
async function checkIfUsernameExists(username) {
  try {
    const response = await fetch(
      `http://localhost:3001/users?username=${username}`
    );
    const data = await response.json();
    return data.length > 0; // Returns true if username exists
  } catch (error) {
    console.error("Error checking username:", error);
    return false;
  }
}

// Function to check if email already exists
async function checkIfEmailExists(email) {
  try {
    const response = await fetch(`http://localhost:3001/users?email=${email}`);
    const data = await response.json();
    return data.length > 0; // Returns true if email exists
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}

// Function to register a user
async function registerUser(user) {
  try {
    // Check if username already exists
    const usernameResponse = await fetch(
      `http://localhost:3001/users?username=${user.username}`
    );
    const usernameData = await usernameResponse.json();
    if (usernameData.length > 0) {
      throw new Error(
        "Username is already taken. Please choose a different username."
      );
    }

    // Check if email already exists
    const emailResponse = await fetch(
      `http://localhost:3001/users?email=${user.email}`
    );
    const emailData = await emailResponse.json();
    if (emailData.length > 0) {
      throw new Error(
        "Email is already registered. Please use a different email."
      );
    }

    // If username and email are unique, register the user
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Registration failed. Please try again.");
    }

    const data = await response.json();
    alert("Registration successful!");
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }
}
