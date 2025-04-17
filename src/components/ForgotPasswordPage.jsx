import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [modalStep, setModalStep] = useState(1);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}forgot`, { email }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        setModalStep(2);
      }
    } catch (error) {
      console.error("Error sending reset code:", error);
    }
  };
 
  const handleResetPassword = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div className="LOGIN-TRASHTALK">
      <div className="login-container forgot-password-container">
        {/* <h1 className="app-title">TrashTalk</h1> */}
        <p className="page-title">Forgot Password?</p>

        {modalStep === 1 && (
          <>
            <p className="subtitle">
              Don't worry! Enter your email address and we'll send you a code to reset your password
            </p>

            <form onSubmit={handleSubmitEmail} className="login-form">
              <input
                type="email" className="input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <button type="submit" className="login-button"> Submit </button>

              <div className="back-to-login">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                  Back to login
                </a>
              </div>
            </form>
          </>
        )}

        {modalStep === 2 && (
          <form onSubmit={handleResetPassword} className="login-form">
            <p className="subtitle">
              An authentication code has been sent to your email.
            </p>

            <input
              type="text"
              name="code"
              className="input-field"
              placeholder="Enter Code"
              required
            />

            <input
              type="password"
              name="newPassword"
              className="input-field"
              placeholder="New Password"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password"
              required
            />

            <button type="submit" className="login-button">
              Reset Password
            </button>

            <div className="resend-code">
              <span>Didn't receive code? </span>
              <a href="#" onClick={(e) => { e.preventDefault(); handleSubmitEmail(e); }}>
                Resend Code
              </a>
            </div>
          </form>
        )}

        {modalStep === 3 && (
          <div className="success-message">
            <p className="subtitle">Your password has been reset successfully.</p>
            <button 
              className="login-button"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </div>
        )}

        <div className="footer">
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/privacy-policy">Privacy and Policy</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;