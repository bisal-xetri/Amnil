if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

document.querySelector(".btn-logout").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});
