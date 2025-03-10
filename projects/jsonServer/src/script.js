// Check if user is logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
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
        <td><button class="btn-logout">Logout</button></td>
      </tr>
    `;
} else {
  document.getElementById("welcomeMessage").textContent =
    "User details not found.";
}

// Logout functionality
document.querySelector(".btn-logout").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
  window.location.href = "login.html";
});
