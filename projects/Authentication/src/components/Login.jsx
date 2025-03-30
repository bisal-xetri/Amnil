import React, { useState } from "react";

function Login({ onLogin, navigateTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Fetch users from the API
      const response = await fetch(
        "https://jsonserver-1-etxz.onrender.com/users"
      );
      const users = await response.json();

      // Find user with matching email and password
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Remove password before storing user data
        const { password, ...userWithoutPassword } = user;
        onLogin(userWithoutPassword);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Failed to login. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="auth-link">
          Don't have an account?{" "}
          <span onClick={() => navigateTo("register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
