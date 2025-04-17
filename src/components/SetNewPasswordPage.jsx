import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/SetNewPasswordPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SetNewPassword = () => {
  const [formData, setFormData] = useState({
    code: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}forgot-reset`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  const handleResendCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}forgot`, { email: localStorage.getItem('resetEmail') }, {
        headers: { "Content-Type": "application/json" },
      });
      if (response && response.status === 200) {
        console.log("Code resent successfully");
      }
    } catch (error) {
      console.error("Error resending code:", error);
    }
  };

  return (
    <div className="LOGIN-TRASHTALK">
      <div className="login-container forgot-password-container">
        <p className="page-title">Set new password</p>
        <p className="subtitle">
          An authentication code has been sent to you email.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            className="input-field"
            placeholder="Code"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            required
          />

          <div className="password-fields">
            <div className="password-input-container">
              <input
                type={showNewPassword ? "text" : "password"}
                className="input-field"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input-field"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="resend-section">
            <span>Didn't receive code?</span>
            <a href="#" onClick={handleResendCode}>Resend</a>
          </div>

          <button type="submit" className="login-button">
            Verify
          </button>

          <div className="back-to-login">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
              Back to login
            </a>
          </div>
        </form>

        <div className="footer">
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/privacy-policy">Privacy and Policy</a>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword; 