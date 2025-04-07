import React, { useState } from "react";
import "../assets/styles/RegisterPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const API = import.meta.env.VITE_AUTH_API_URL;
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", accessCode: "", password: "", confirmPassword: "",termsAccepted: false,});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, termsAccepted, ...filteredFormData } = formData;
    const name = `${firstname} ${lastname}`;
    const dataToSubmit = { ...filteredFormData, name };

    try {
      const response = await axios.post(`${API}/register`, dataToSubmit, {
        headers: { "Content-Type": "application/json" },
      });

      if (response && response.status === 200) {
        console.log("Register successful:", response.data);

        navigate("/login");
      }
    } catch (error) {
      setErrors({ ...errors, termsAccepted: error.response.data.error });
    }
  };

  return (
    <div className="registration-form">
      <h1>TrashTalk</h1>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Firstname" type="text" name="firstname" value={formData.firstname} onChange={handleChange} error={errors.firstname} />
        <InputField label="Lastname" type="text" name="lastname" value={formData.lastname} onChange={handleChange} error={errors.lastname} />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <InputField label="Access Code" type="text" name="accessCode" value={formData.accessCode} onChange={handleChange} />
        <InputField label="Set Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
        <InputField label="I agree to the Terms & Conditions" type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} error={errors.termsAccepted} />
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}

export default RegisterPage;


const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required/>
      {error && <span className="error" style={{ color: "red" }}>{error}</span>}
    </div>
  );
}