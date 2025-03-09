document.querySelector(".btn-register").addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.querySelector("#name").value;
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#cpassword").value;

  // Validate form inputs
  if (!validateForm(name, username, email, password, confirmPassword)) {
    return; // Stop if validation fails
  }

  // Create user object
  const user = createUserObject(name, username, email, password);

  // Register user
  registerUser(user);
});

// Function to validate form inputs
function validateForm(name, username, email, password, confirmPassword) {
  if (!name || !username || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  return true;
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

// Function to register a user
function registerUser(user) {
  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((errorData) => {
          throw new Error(
            errorData.message || "Registration failed. Please try again."
          );
        });
      }
      return response.json();
    })
    .then((data) => {
      alert("Registration successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      console.error("Error details:", error.message, error.stack);
      alert(error.message); // Show error message to the user
    });
}
