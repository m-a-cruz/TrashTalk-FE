import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [modalStep, setModalStep] = useState(1); // Tracks which modal to show
  const API = import.meta.env.VITE_RES_API_URL; // API URL from environment variables
  const [formData, setFormData] = useState({ email: "", });
  const [errors, setErrors] = useState({}); // State to hold error messages

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}`, formData, {headers: { "Content-Type": "application/json" },});
        if (response && response.status === 200) {
        if (modalStep === 1) {
          setModalStep(2);
        }
      }
    } catch (error) {
      setErrors({ ...errors, email: error.response.data.error });
    }
  };

  const handleSubmitVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}-verify`, formData, {headers: { "Content-Type": "application/json" },});
        if (response && response.status === 200) {
        setErrors({ ...errors, code: null});
        setModalStep(2); // Move to the next step
      }
    } catch (error) {
      setErrors({ ...errors, code: error.response.data.error});
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const {code, ...filterFormData} = formData;
    try {
      const response = await axios.post(`${API}-reset`, filterFormData, {headers: { "Content-Type": "application/json" },});
        if (response && response.status === 200) {
        console.log("Password reset successfully:", response.data);
        setModalStep(3); // Move to the next step
      }
    } catch (error) {
      setErrors({ ...errors, newPassword: error.response.data.error });
    }
    

  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-green-600 font-bold text-3xl mb-6">TrashTalk</header>

      {/* Modal Content Based on Step */}
      <div className="bg-white shadow-lg rounded-md w-96 p-6">
        {modalStep === 1 && (
          <>
            <FormHeader title="Forgot Password" subtitle="Enter your email address, and we'll send you a code to reset your password." />
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} error={errors.email} />
            <Button label="Send Code" onClick={handleSubmitEmail} />
          </>
        )}

        {modalStep === 2 && (
          <>
            <FormHeader title="Set New Password" subtitle="An authentication code has been sent to your email." />
            <InputField label="Code" type="text" name="code" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} error={errors.code} />
            <Button label="Verify" onClick={handleSubmitVerify} />
            <InputField label="New Password" type="password" name="newPassword" value={formData.newPassword} onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} error={errors.newPassword} />
            <InputField label="Confirm New Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} error={errors.confirmPassword} />
            <Button label="Reset Password" onClick={handleResetPassword} />
            <p
              className="text-green-600 text-center mt-4 cursor-pointer"
              onClick={() => console.log("Resend code clicked!")}
            >
              Didn’t receive code? <Button label="Resend Code" onClick={handleSubmitVerify} />
            </p>
          </>
        )}

        {modalStep === 3 && (
          <>
            <FormHeader title="Password Reset Successful" subtitle="Your password has been reset successfully." />
            <Button label="Back to Login" onClick={() => window.location.href = "/login"} />
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-600">
        <a href="/terms" className="mr-4 underline">Terms and Conditions</a>
        <a href="/privacy" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;


const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required/>
      {error && <span className="text-red-500 text-sm" style={{color: 'red'}}>{error}</span>}

    </div>
  );
}

const Button = ({ label, onClick }) => {
  return (
    <button className="w-full bg-green-600 text-white py-2 rounded-md" onClick={onClick} > 
      {label}
    </button>
  );
}

const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}