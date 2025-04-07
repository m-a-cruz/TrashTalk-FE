import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post(`${API}/login`, { email, password }, { withCredentials: true });
      if (response && response.status === 200) {
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
       <h2>Login Page</h2>
       <form onSubmit={handleLogin}>
         <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
         <br />
         <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
         <br />
         <button type="submit">Login</button>
       </form>
       <button onClick={() => navigate("/register")}>Go to Register</button>
       <button onClick={() => navigate("/forgot-password")}>Forgot Password</button>
     </div>
  );
};

export default LoginPage;
