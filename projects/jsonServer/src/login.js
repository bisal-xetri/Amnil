export async function loginUser(e) {
  e.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch(
      `http://localhost:3001/users?username=${username}`
    );
    const users = await response.json();

    if (users.length > 0 && users[0].password === password) {
      // Store user details in localStorage
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(users[0]));
      window.location.href = "index.html";
    } else {
      // Show error message for invalid credentials
      showError("username", "Invalid username or password");
      showError("password", "Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    showError("username", "An error occurred. Please try again.");
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
