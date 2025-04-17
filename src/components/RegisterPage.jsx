import React, { useState } from "react";
import "../assets/styles/RegisterPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const API = import.meta.env.VITE_AUTH_API_URL;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accessCode: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, termsAccepted, ...filteredFormData } = formData;
    const name = `${firstname} ${lastname}`;
    const dataToSubmit = { ...filteredFormData, name };

    try {
      const response = await axios.post(`${API}register`, dataToSubmit, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="LOGIN-TRASHTALK">
      <div className="login-container">
        <h1 className="app-title">TrashTalk</h1>
        <h2 className="page-title">Register</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="name-fields">
            <input
              type="text"
              className="input-field"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={(e) => setFormData({...formData, firstname: e.target.value})}
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={(e) => setFormData({...formData, lastname: e.target.value})}
              required
            />
          </div>
          
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />

          <input
            type="text"
            className="input-field"
            placeholder="Access Code"
            value={formData.accessCode}
            onChange={(e) => setFormData({...formData, accessCode: e.target.value})}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Set Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
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

          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="input-field"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
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

          <div className="terms-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                required
              />
              <span>I agree to the </span>
              <a href="/terms" className="terms-link">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="login-button">
            Create Account
          </button>

          <div className="register-section">
            <span className="register-text">Already have an account?</span>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="register-link">
              Log in
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
}

export default RegisterPage;