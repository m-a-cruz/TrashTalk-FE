import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}login`, { email, password }, { withCredentials: true });
      if (response && response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="LOGIN-TRASHTALK">
      <div className="login-container">
        <h1 className="app-title">TrashTalk</h1>
        <h2 className="page-title">Log In</h2>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/forgot-password"); }} className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit" className="login-button">
            Log In
          </button>

          <div className="register-section">
            <span className="register-text">Don't have an account?</span>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/register"); }} className="register-link">
              Register
            </a>
          </div>
        </form>

        <div className="footer">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy and Policy</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
