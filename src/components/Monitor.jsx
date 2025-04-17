import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Monitor.css";

const Monitor = () => {
  return (
    <div className="monitor-wrapper">
      <Navbar />
      <div className="monitor-container">
        <div className="monitor-header">
          <h2 className="monitor-title">Real-time Monitoring</h2>
        </div>
        
        <div className="monitor-grid">
          <div className="monitor-card">
            <h2 className="card-title">Collection Status</h2>
            <div className="status-indicator active"></div>
            <p className="status-text">Active Collections: 5</p>
          </div>
          
          <div className="monitor-card">
            <h2 className="card-title">Waste Levels</h2>
            <div className="waste-meter">
              <div className="waste-level" style={{ height: "75%" }}></div>
            </div>
            <p className="status-text">Average Fill Level: 75%</p>
          </div>
          
          <div className="monitor-card">
            <h2 className="card-title">Recent Alerts</h2>
            <ul className="alert-list">
              <li>Bin #123 needs immediate attention</li>
              <li>Collection route delayed</li>
              <li>New waste type detected</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor; 