import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SetNewPasswordPage.css";

const SetNewPasswordPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleSubmit = () => {
    setIsPasswordReset(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); 
  };

  // SVG eye icons
  const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24"/>
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a13.16 13.16 0 0 1-1.67 2.68"/>
      <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 8 11 8a9.74 9.74 0 0 0 5-1.28"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  );

  return (
    <div className="setnew-container">
      <div className="setnew-left-section">
        <div className="setnew-form-container">
          {/* Logo */}
          <div className="setnew-logo">
            <img src="/images/BINLOGO.png" className="setnew-logo-img" alt="Bin Logo" />
            <span className="setnew-logo-text">Bin There,<br />Done That!</span>
          </div>

          {isPasswordReset ? (
            <div className="setnew-success-message">
              <h2 className="setnew-success-title">Your password has been reset!</h2>
              <p className="setnew-success-subtitle">Redirecting to Login in 3 seconds...</p>
            </div>
          ) : (
            <>
              <h2 className="setnew-title">Set a new password</h2>
              <p className="setnew-subtitle">
                Your previous password has been reset. Please set a new password for your account.
              </p>
             
              <div className="setnew-input-group">
                <label className="setnew-label">New password</label>
                <div className="setnew-password-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="setnew-input" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="setnew-password-toggle"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <div className="setnew-input-group">
                <label className="setnew-label">Confirm password</label>
                <div className="setnew-password-container">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="setnew-input"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="setnew-password-toggle"
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <button className="setnew-button" onClick={handleSubmit}>
                Set password
              </button>
            </>
          )}
        </div>
      </div>
      
      <div className="setnew-right-section">
        <img src="/images/Forgotimg.png" alt="Illustration" className="setnew-illustration" />
      </div>
    </div>
  );
};

export default SetNewPasswordPage;