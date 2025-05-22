import { useState, useRef, useEffect } from "react";
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt,FaExclamationTriangle,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ProfileIcon.css";
import axios from "axios";

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;

  const [user, setUser] = useState({ name: "", email: "" });

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`${API}`, { withCredentials: true });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);


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
                <h4>{user.name || "Loading..."}</h4>
                <p>{user.email || "Loading..."}</p>
              </div>
            </div>
          </div>
          
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => navigate("/accountsettings")}>
           <FaCog className="dropdown-icon" />
              <span>Account Settings</span>
            </button>
           
            <button className="dropdown-item" onClick={() => navigate("/helppage")}>
              <FaQuestionCircle className="dropdown-icon" />
              <span>Help & Support</span>
               </button>
              <button className="dropdown-item" onClick={() => navigate("/reportaproblem")}>
              <FaExclamationTriangle className ="dropdown-icon" />
              <span> Report a Problem </span>
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