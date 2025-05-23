import React, { useState } from "react";
import "../assets/styles/RegisterPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const { firstname, lastname, termsAccepted, ...filteredFormData } = formData;
    const name = `${firstname} ${lastname}`;
    const dataToSubmit = { ...filteredFormData, name };

    console.log(dataToSubmit);

    try {
      const response = await axios.post(`${API}register`, dataToSubmit, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        setError("");
        setFormData({});
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || "Registration failed. Please try again");
      } 
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError(""); // Clear error when user types
  };

  return (
    <div className="LOGIN-TRASHTALK">
      <div className="image-section">
        <img src="/images/loginbg.png" alt="TrashTalk" 
         style={{
          width: "50%",
          height: "50vh",
          objectFit: "cover",
          display: "block"
        }}/>
        {/* <div className="image-content">
          <p className="image-text">Smart Waste Management System</p>
        </div> */}
      </div>
      <div className="login-container">          
      <img 
  src="/images/TrashTalk.png" 
  alt="TrashTalk Logo" 
  className="appititle"
/>
        <h2 className="page-title">Register</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="name-fields">
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              value={formData.firstname}
              onChange={(e) => handleInputChange('firstname', e.target.value)}
              required
              disabled={isLoading}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => handleInputChange('lastname', e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            disabled={isLoading}
          />

          <input
            type="text"
            className="input-field"
            placeholder="Access Code"
            value={formData.accessCode}
            onChange={(e) => handleInputChange('accessCode', e.target.value)}
            required
            disabled={isLoading}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Set Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
              disabled={isLoading}
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
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
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              required
              disabled={isLoading}
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
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
                onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                required
                disabled={isLoading}
              />
              I agree to the <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (!isLoading) navigate("/terms-and-conditions"); 
                }}
                className={isLoading ? "disabled" : ""}
              >Terms and Conditions</a>
            </label>
          </div>
          <ErrorMessage message={error} />
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          <div className="register-section">
            <span className="register-text">Already have an account?</span>
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (!isLoading) navigate("/login"); 
              }} 
              className={`register-link ${isLoading ? 'disabled' : ''}`}
            >
              Log In
            </a>
          </div>
        </form>

        <div className="footer">
  <a 
    href="#" 
    onClick={(e) => { 
      e.preventDefault(); 
      if (!isLoading) navigate("/terms-and-conditions"); 
    }}
    className={isLoading ? "disabled" : ""}
  >
    Terms and Conditions
  </a>
  <a 
    href="#" 
    onClick={(e) => { 
      e.preventDefault(); 
      if (!isLoading) navigate("/privacy-policy"); 
    }}
    className={isLoading ? "disabled" : ""}
  >
    Privacy Policy
  </a>
</div>

      </div>
    </div>
  );
};


export default RegisterPage;