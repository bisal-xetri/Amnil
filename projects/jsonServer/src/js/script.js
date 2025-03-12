// Check if user is logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "/src/pages/login.html";
}

// Retrieve user details from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// Populate user details in the DOM
if (user) {
  document.getElementById(
    "welcomeMessage"
  ).textContent = `Welcome, ${user.name}!`;

  const userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = `
      <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td><button type="submit" class="btn-logout">Logout</button></td>
      </tr>
    `;
} else {
  document.getElementById("welcomeMessage").textContent =
    "User details not found.";
}

// Use event delegation to handle logout button click
document
  .getElementById("userTableBody")
  .addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("btn-logout")) {
      // Logout functionality
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("user");
      window.location.href = "/src/pages/login.html";
    }
  });
