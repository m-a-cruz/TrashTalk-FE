import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Monitor.css";
import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.png";

const Monitor = () => {
  const bins = [
    {
      id: 1,
      image: cam1,
      location: "ST Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum"
    },
    {
      id: 2,
      image: cam2,
      location: "Admin Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum"
    },
    {
      id: 3,
      image: cam3,
      location: "MTV Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum"
    }
  ];

  return (
    <div className="monitor-wrapper">
      <Navbar />
      <div className="monitor-container">
        <div className="monitor-header">
          <h2 className="monitor-title">Real-time Bin Monitoring</h2>
        </div>
        
        <div className="monitor-grid">
          {bins.map((bin) => (
            <div key={bin.id} className="monitor-card">
              <div className="bin-image-container">
                <img src={bin.image} alt={`Bin ${bin.id}`} className="bin-image" />
                <div className="bin-overlay">
                  <span className="bin-number">BIN {bin.id}</span>
                  <span className="bin-location">
                    <i className="fas fa-map-marker-alt"></i> {bin.location}
                  </span>
                </div>
              </div>
              <div className="bin-details">
                <div className="detail-row">
                  <span className="detail-label">TIMESTAMP</span>
                  <span className="detail-value">{bin.timestamp}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">WASTE TYPE</span>
                  <span className="detail-value">{bin.wasteType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitor; 