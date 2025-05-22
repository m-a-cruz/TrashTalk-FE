import { useNavigate } from "react-router-dom";
import "../assets/styles/HelpPage.css";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      {/* Top Navbar */}
      <nav className="navbar">
        <img 
          src="../public/images/BINLOGO1.png" 
          alt="Logo" 
          className="logo-imageo" 
          onClick={() => navigate("/dashboard")} 
        />
      </nav>
      <div className="flex">
        {/* Sidebar */}
        <div className="help-sidebar">
          <button 
            onClick={() => navigate("/dashboard")}
            className="sidebar-btn"
          >
            ⬅ Back
          </button>
          <button 
            onClick={() => navigate("/accountsettings")} 
            className="sidebar-btn"
          >
            ⚙ Account Settings
          </button>
          <button 
            onClick={() => navigate("/helppage")} 
            className="sidebar-btn active"
          >
            ❓ Help
          </button>
          <button 
            onClick={() => navigate("/reportaproblem")} 
            className="sidebar-btn"
          >
            ⚠ Report a Problem
          </button>
        </div>

        {/* Help Content */}
        <div className="help-content">
          <h2 className="help-title">Help Center</h2>
          <div className="help-card">
            <p className="help-description">
              Welcome to the Help Center. Find answers to common questions and troubleshooting tips below.
            </p>

            {/* Example FAQs */}
            <div className="faq-section">
              <h3 className="faq-title">Frequently Asked Questions</h3>
              <ul className="faq-list">
                <li className="faq-item">How do I change my password?</li>
                <li className="faq-item">How do I update my profile picture?</li>
                <li className="faq-item">Where can I report a bug?</li>
                <li className="faq-item">How do I contact support?</li>
              </ul>
            </div>

            <div className="contact-section">
              <h3 className="contact-title">Need More Help?</h3>
              <p className="contact-description">
                If you can't find what you're looking for, feel free to contact our support team.
              </p>
              <button 
                onClick={() => navigate("/reportaproblem")}
                className="contact-btn"
              >
                Report a Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;