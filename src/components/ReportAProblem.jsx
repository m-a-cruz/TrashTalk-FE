import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/ReportAProblem.css";

const ReportaProblem = () => {
  const navigate = useNavigate();
  const [problemDescription, setProblemDescription] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setScreenshot(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Problem Submitted:", problemDescription, screenshot);
    alert("Your report has been submitted!");
    setProblemDescription("");
    setScreenshot(null);
  };

  return (
    <div className="report-page">
      <nav className="navbar ">
        <img 
          src="../public/images/BINLOGO1.png" 
          alt="Logo" 
          className="logo-image" 
          onClick={() => navigate("/dashboard")} 
        />
      </nav>

      <div className="flex">
        <div className="report-sidebar">
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
            className="sidebar-btn"
          >
            ❓ Help
          </button>
          <button className="sidebar-btn active">
            ⚠ Report a Problem
          </button>
        </div>

        <div className="report-content">
          <h2 className="text-2xl font-semibold mb-4">Report a Problem</h2>
          <div className="report-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label">
                  Describe the Problem
                </label>
                <textarea
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Attach Screenshot (if applicable)
                </label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange} 
                  className="form-input"
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportaProblem;
