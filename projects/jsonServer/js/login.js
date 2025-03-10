document.querySelector(".btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  fetch("http://localhost:3001/users?username=" + username)
    .then((response) => response.json())
    .then((users) => {
      if (users.length > 0 && users[0].password === password) {
        // Store user details in localStorage
        const user = users[0];
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
});
