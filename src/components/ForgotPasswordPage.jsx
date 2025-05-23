import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ForgotPasswordPage.css";
import ErrorMessage from "./ErrorMessage";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [modalStep, setModalStep] = useState(1);
  const [form, setForm] = useState({ });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setForm({ ...form, email: email });
    setIsLoading(true);

    console.log(email);
    try {
      const response = await axios.post(`${API}forgot`, { email }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        setError("");
        setModalStep(2);
      }
    } catch (error) {
      setError(error.response.data.error);
      console.error("Error sending reset code:", error);
    }
  };
 
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}forgot-reset`, { 
        email: form.email,
        code: form.code,
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword
       });
      if (response && response.status === 200) {
        setError("");
        setModalStep(3);
      }
    } catch (error) {
      setError(error.response.data.error);
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="FORGOT-PASSWORD">
      <div className="logo-container">
        <img 
          src="/images/TrashTalk.png" 
          alt="TrashTalk Logo" 
        />
      </div>
      <div className="forgot-password-container">
        
        {/* <h1 className="app-title">TrashTalk</h1> */}
        <p className="page-title">Forgot Password?</p>

        {modalStep === 1 && ( 
          <>
            <p className="subtitle">
              Don't worry! Enter your email address and we'll send you a code to reset your password
            </p>

            <form onSubmit={handleSubmitEmail} className="forgot-password-form">
              <input
                type="email" 
                className="input-field" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <ErrorMessage message={error} />

              <button type="submit" className="submit-button">
                Submit
              </button>

              <div className="back-to-login">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                  Back to login
                </a>
              </div>
            </form>
          </>
        )}

        {modalStep === 2 && (
          <form onSubmit={handleResetPassword} className="forgot-password-form">
            <p className="subtitle">
              An authentication code has been sent to your email.
            </p>

            <input
              type="text"
              name="code"
              className="input-field"
              placeholder="Enter Code"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              required
            />

            <input
              type="password"
              name="newPassword"
              className="input-field"
              placeholder="New Password"
              value={form.newPassword}
              onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              required
            />

            <button type="submit" className="submit-button">
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
              className="submit-button"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </div>
        )}

        <div className="footer">
          <a 
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              navigate("/terms-and-conditions"); 
            }}
          >
            Terms and Conditions
          </a>
          <a 
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              navigate("/privacy-policy"); 
            }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;