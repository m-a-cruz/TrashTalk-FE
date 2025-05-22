import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/AccountSettings.css";

const AccountSettings = () => {
  const navigate = useNavigate();

  // Editable Fields
  const [firstName, setFirstName] = useState(() => localStorage.getItem("firstName") || "Name");
  const [lastName, setLastName] = useState(() => localStorage.getItem("lastName") || "LastName");
  const [email] = useState("Admin@ncf.edu.ph");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Function to save changes
  const handleSave = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    setTimeout(() => {
      window.dispatchEvent(new Event("storage"));
    }, 100); 
  
    alert("Name updated!");
  };

  const Avatars = [
    "../public/images/avatar1.jpg",
   "../public/images/avatar2.jpg",
   "../public/images/avatar3.jpg",
   "../public/images/avatar4.jpg",
   "../public/images/avatar5.jpg",
   "../public/images/avatar6.jpg",
   "../public/images/avatar7.jpg",
   "../public/images/avatar8.jpg",
   "../public/images/avatar9.jpg",
   "../public/images/avatar10.jpg",
   "../public/images/avatar11.jpg",
   "../public/images/avatar12.webp",
   "../public/images/avatar13.jpg",
   "../public/images/avatar14.webp",
   "../public/images/avatar15.jpg",
   "../public/images/avatar16.jpg",
   "../public/images/avatar17.jpg",
   "../public/images/avatar18.webp",
   "../public/images/avatar19.jpg",
   "../public/images/avatar20.jpg",
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
        <img 
          src="../public/images/BINLOGO1.png" 
          alt="Logo" 
          className="logo-imageo" 
          onClick={() => navigate("/dashboard")} 
        />
      </nav>

      <div className="main-content">
        {/* sidebar */}
        <div className="sidebar">
          <button 
            onClick={() => navigate("/dashboard")} 
            className="sidebar-button"
          >
            ⬅ Back
          </button>
          <button 
            onClick={() => navigate("/accountsettings")} 
            className="sidebar-button active"
          >
            ⚙ Account Settings
          </button>
          <button 
            onClick={() => navigate("/helpPage")} 
            className="sidebar-button"
          >
            ❓ Help
          </button>
          <button 
            onClick={() => navigate("/reportaproblem")} 
            className="sidebar-button"
          >
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={!isEditingName}
                  className="form-input half-width"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
              <input 
                type="text" 
                value={email} 
                disabled 
                className="form-input full-width" 
              />
            </div>

            {/* Password */}
            <div className="form-section password-section">
              <p className="form-label">Password</p>
              <div className="form-row">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  disabled={!isEditingPassword}
                  className="form-input half-width"
                  placeholder="Current Password"
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={!isEditingPassword}
                  className="form-input half-width"
                  placeholder="New Password"
                />
                <button 
                  onClick={() => setIsEditingPassword(!isEditingPassword)} 
                  className="btn btn-secondary"
                >
                  {isEditingPassword ? "Save" : "Edit"}
                </button>
              </div>
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