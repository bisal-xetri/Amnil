import React from "react";

function Home({ user, onLogout }) {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Auth Demo</h1>
        <div className="user-info">
          <span>Welcome, {user.email}</span>
          <button className="btn btn-outline" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="content-card">
          <h2>Home Page</h2>
          <p>
            This is a protected page. You can only see this content if you are
            logged in.
          </p>
          <div className="user-details">
            <h3>Your Account Details:</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
