import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [modalStep, setModalStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await axios.post(`${API}forgot`, { email }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        setModalStep(2);
      }
    } catch (error) {
      console.error("Error sending reset code:", error);
      setError("Failed to send reset code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
 
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await axios.post(`${API}forgot-reset`, {
        code: e.target.code.value,
        newPassword: e.target.newPassword.value,
        confirmPassword: e.target.confirmPassword.value
      }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        setModalStep(3);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-layout">
      {/* Left side - Form */}
      <div className="forgot-form-container">
        <div className="form-content">
          {/* Logo and Brand */}
          <div className="brand-header">
            <img src="/images/BINLOGO.png" className="brand-logo" alt="Bin Logo" />
            <h1 className="brand-title">
              Bin There, <br /> Done That!
            </h1>
          </div>

          {/* Back to Login */}
          <div className="back-navigation">
            <span 
              className="back-link" 
              onClick={() => navigate("/")}
            >
              ← Back to Login
            </span>
          </div>

          {modalStep === 1 && (
            <div className="form-section">
              <h2 className="page-heading">Forgot your password?</h2>
              <p className="page-description">
               Enter your email below to recover your password.
              </p>

              {error && <div className="error-message">{error}</div>}

              <form onSubmit={handleSubmitEmail} className="forgot-form">
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input
                    type="email" 
                    className="form-input" 
                    placeholder="Admin@ncf.edu.ph" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    disabled={isLoading}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          )}

          {modalStep === 2 && (
            <div className="form-section">
              <h2 className="page-heading">Enter Verification Code</h2>
              <p className="page-description">
                An authentication code has been sent to your email.
              </p>

              {error && <div className="error-message">{error}</div>}

              <form onSubmit={handleResetPassword} className="forgot-form">
                <div className="input-group">
                  <label className="input-label">Verification Code</label>
                  <input
                    type="text"
                    name="code"
                    className="form-input"
                    placeholder="Enter Code"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="form-input"
                    placeholder="New Password"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-input"
                    placeholder="Confirm Password"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Resetting...' : 'Reset Password'}
                </button>

                <div className="resend-section">
                  <span>Didn't receive code? </span>
                  <a 
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (!isLoading) {
                        setModalStep(1);
                      }
                    }}
                    className={isLoading ? 'disabled' : ''}
                  >
                    Resend Code
                  </a>
                </div>
              </form>
            </div>
          )}

          {modalStep === 3 && (
            <div className="form-section">
              <h2 className="page-heading">Password Reset Successful!</h2>
              <p className="page-description">
                Your password has been reset successfully.
              </p>

              <button 
                className="submit-btn"
                onClick={() => navigate("/")}
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="forgot-image-container">
        <img src="/images/Forgotimg.png" alt="Forgot Password Illustration" className="forgot-illustration" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;