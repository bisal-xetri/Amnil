export async function loginUser(e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch(
      `http://localhost:3001/users?username=${username}`
    );
    const users = await response.json();

    if (users.length > 0 && users[0].password === password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(users[0]));
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
}
