export async function registerUser(e) {
  e.preventDefault();

  // Disable the button and show loading state
  const registerButton = document.querySelector(".btn-register");
  registerButton.disabled = true;
  registerButton.textContent = "Registering...";

  // Clear previous errors
  clearErrors();

  // Get form values
  const name = document.querySelector("#name").value;
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#cpassword").value;

  // Validate form inputs
  if (!(await validateForm(name, username, email, password, confirmPassword))) {
    registerButton.disabled = false;
    registerButton.textContent = "Register";
    return;
  }

  // Create user object
  const user = { name, username, email, password };

  try {
    // Check if username or email already exists
    const existingUsers = await checkIfUserExists(username, email);
    if (existingUsers.some((u) => u.username === username)) {
      showError("username", "Username is already taken.");
      throw new Error("Username is already taken.");
    }
    if (existingUsers.some((u) => u.email === email)) {
      showError("email", "Email is already registered.");
      throw new Error("Email is already registered.");
    }

    // Register the user
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Registration failed. Please try again.");
    }

    alert("Registration successful!");
    window.location.href = "/src/pages/login.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  } finally {
    // Re-enable the button and reset text
    registerButton.disabled = false;
    registerButton.textContent = "Register";
  }
}

// Function to validate form inputs
async function validateForm(name, username, email, password, confirmPassword) {
  let isValid = true;

  // Check if all fields are filled
  if (!name) {
    showError("name", "Name is required!");
    isValid = false;
  }
  if (!username) {
    showError("username", "Username is required!");
    isValid = false;
  }
  if (!email) {
    showError("email", "Email is required!");
    isValid = false;
  }
  if (!password) {
    showError("password", "Password is required!");
    isValid = false;
  }
  if (!confirmPassword) {
    showError("cpassword", "Confirm Password is required!");
    isValid = false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    showError("cpassword", "Passwords do not match!");
    isValid = false;
  }

  // Validate email format
  if (email && !validateEmail(email)) {
    showError("email", "Please enter a valid email address!");
    isValid = false;
  }

  return isValid;
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to check if username or email already exists
async function checkIfUserExists(username, email) {
  try {
    const response = await fetch(
      `http://localhost:3001/users?username=${username}&email=${email}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error checking user:", error);
    return [];
  }
}

// Function to display error messages
function showError(field, message) {
  const errorElement = document.querySelector(`#${field} + .error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

// Function to clear error messages
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
  });
}
