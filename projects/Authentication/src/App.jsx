import React, { useState, useEffect } from "react";
import "./index.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app load
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setCurrentPage("home");
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setCurrentPage("login");
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Simple routing based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return user ? (
          <Home user={user} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} navigateTo={navigateTo} />
        );
      case "register":
        return <Register onRegister={handleLogin} navigateTo={navigateTo} />;
      case "login":
      default:
        return <Login onLogin={handleLogin} navigateTo={navigateTo} />;
    }
  };

  return <div className="app-container">{renderPage()}</div>;
}

export default App;
