// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Dummy registration logic
//     alert("User registered successfully!");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Register Page</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Register</button>
//       </form>
//       <button onClick={() => navigate("/login")}>Go to Login</button>
//     </div>
//   );
// };

// export default RegisterPage;



import React, { useState } from "react";
import '../assets/styles/RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accessCode: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="registration-form">
      <h1>TrashTalk</h1>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname</label>
          <input type="text"  name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" name="lastname"  value={formData.lastname} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email"  value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Access Code</label>
          <input type="text" name="accessCode" value={formData.accessCode}  onChange={handleChange} />
        </div>
        <div>
          <label>Set Password</label>
          <input type="password" name="password"  value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword"  value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div>
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <label>I agree to the Terms & Conditions</label>
        </div>
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default RegisterPage;