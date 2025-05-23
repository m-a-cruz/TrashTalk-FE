import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/styles/AccountSettings.css";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import { toast } from "react-toastify";

const AccountSettings = () => {
  const navigate = useNavigate();

  // Editable Fields
  // const [firstName, setFirstName] = useState(() => localStorage.getItem("firstName") || "Name");
  // const [lastName, setLastName] = useState(() => localStorage.getItem("lastName") || "LastName");
  // const [email] = useState("Admin@ncf.edu.ph");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const API = import.meta.env.VITE_USER_API_URL;
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    currentPassword: "",
    password: "",
  });
  const [data, setData] = useState({});

  useEffect(() => {  
      fetchUserData();
    }, []);

  
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${API}user`, { withCredentials: true });
      setUser(response.data);

    } catch (error) {
      setError(error.response.data.error || "Failed to fetch user data:");
      console.error("Failed to fetch user data:", error);
    }
  };

  // Editable Fields

  // Function to save changes
  const handleSave = async () => {
  try {
    const updatedData = {
      email: user.email,
    };

    if (isEditingName && formData.name) {
      updatedData.name = formData.name;
    }

    if (isEditingPassword && formData.currentPassword && formData.password) {
      updatedData.currentPassword = formData.currentPassword;
      updatedData.password = formData.password;
    }

    const response = await axios.put(`${API}user`, updatedData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (response.status === 200) {
      alert("Changes saved successfully!");
      setError("");
      setFormData({});
      setIsEditingName(false);
      setIsEditingPassword(false);
      fetchUserData();
    }
  } catch (error) {
    console.error("Error updating user data:", error);
    setError(error.response?.data?.error || "Failed to update user data.");
  }
};

  const Avatars = [
    "../images/avatar1.jpg", "../images/avatar2.jpg", "../images/avatar3.jpg",
   "../images/avatar4.jpg", "../images/avatar5.jpg", "../images/avatar7.jpg",
   "../images/avatar8.jpg",  "../images/avatar10.jpg", "../images/avatar11.jpg",
   "../images/avatar12.webp", "../images/avatar13.jpg", "../images/avatar14.webp",
   "../images/avatar15.jpg", "../images/avatar16.jpg", "../images/avatar17.jpg",
   "../images/avatar18.webp", "../images/avatar19.jpg", "../images/avatar20.jpg",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(() => 
    localStorage.getItem("selectedAvatar") || Avatars[0]
  );

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem("selectedAvatar", avatar); 
  };

  return (
    <div className="account-settings-container">
      <nav className="navbar ">
        <img  src="../images/BINLOGO1.png" alt="Logo"  className="logo-imageo"  onClick={() => navigate("/dashboard")} />
      </nav>

      <div className="main-content">
        {/* sidebar */}
        <div className="sidebar">
          <button onClick={() => navigate("/dashboard")} className="sidebar-button" >
            ⬅ Back
          </button>
          <button onClick={() => navigate("/accountsettings")} className="sidebar-button active" >
            ⚙ Account Settings
          </button>
          <button onClick={() => navigate("/helpPage")} className="sidebar-button" >
            ❓ Help
          </button>
          <button  onClick={() => navigate("/reportaproblem")} className="sidebar-button" >
            ⚠ Report a Problem
          </button>
        </div>

        {/* account settings */}
        <div className="content-area">
          <h2 className="content-title">Account Settings</h2>
          <div className="settings-card">
            
            {/* avatar Select */}
            <div className="avatar-section">
              <p className="avatar-label">Avatar </p>
              <div className="avatar-display">
                <img 
                  src={selectedAvatar} 
                  alt="Profile" 
                  className="current-avatar" 
                />
              </div>

              {/* avatar selection options */}
              <p className="avatar-change-label">Change Avatar</p>
              <div className="avatar-grid">
                {Avatars.map((avatar, index) => (
                  <img 
                    key={index} 
                    src={avatar} 
                    alt={`Avatar ${index + 1}`} 
                    className={`avatar-option ${selectedAvatar === avatar ? "selected" : ""}`}
                    onClick={() => handleAvatarChange(avatar)} 
                  />
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div className="form-section">
              <p className="form-label">Full Name</p>
              <div className="form-row">
                <input
                  type="text"
                  placeholder={user.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditingName}
                  className="form-input half-width"
                />
                <button
                  onClick={() => {
                    if (isEditingName) handleSave(); 
                    setIsEditingName(!isEditingName);
                  }}
                  className="btn btn-secondary"
                >
                  {isEditingName ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="form-section">
              <p className="form-label">Contact Email</p>
              <div className="form-row">
                <input 
                  type="text" 
                  value={user.email} 
                  disabled 
                  className="form-input half-width" 
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-section password-section">
              <p className="form-label">Password</p>
              <div className="form-row">
                <input
                  type="password"
                  value={formData.currentPassword}

                  onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                  disabled={!isEditingPassword}
                  className="form-input half-width"
                  placeholder="Current Password"
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  disabled={!isEditingPassword}
                  className="form-input half-width"
                  placeholder="New Password"
                />
                <button 
                  onClick={() => {
                    if (isEditingPassword) handleSave(); 
                    setIsEditingPassword(!isEditingPassword);
                  }}
                  className="btn btn-secondary"
                >
                  {isEditingPassword ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            <div className="form-row">
              {error && <ErrorMessage message={error} />}
            </div>

            {/* Save Button */}
            <button onClick={handleSave} className="save-button">
              Save Changes
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;