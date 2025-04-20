import { useState, useRef, useEffect } from "react";
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ProfileIcon.css";
import axios from "axios";

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
        await axios.post(`${API}logout`, null, { withCredentials: true });
        navigate("/");
        console.log("Logout successful");
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
  return (
    <div className="profile-container" ref={profileRef}>
      <div className="profile-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaUser />
      </div>
      
      {isOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-header">
            <div className="user-info">
              <div className="user-avatar">
                <FaUser />
              </div>
              <div className="user-details">
                <h4>John Doe</h4>
                <p>john.doe@example.com</p>
              </div>
            </div>
          </div>
          
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => navigate("/profile")}>
              <FaUser className="dropdown-icon" />
              <span>My Profile</span>
            </button>
            <button className="dropdown-item" onClick={() => navigate("/settings")}>
              <FaCog className="dropdown-icon" />
              <span>Settings</span>
            </button>
            <button className="dropdown-item" onClick={() => navigate("/help")}>
              <FaQuestionCircle className="dropdown-icon" />
              <span>Help & Support</span>
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item logout" onClick={handleLogout}>
              <FaSignOutAlt className="dropdown-icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon; 