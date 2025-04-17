import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Insights.css";
 
const Insights = () => {
  return (
    <div className="insights-wrapper">
      <Navbar />
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Analytics & Trends</h2>
        </div>
        
        <div className="insights-grid">
          <div className="insights-card">
            <h2 className="card-title">Waste Composition</h2>
            <div className="chart-container">
              <div className="chart-bar" style={{ height: "60%" }}></div>
              <div className="chart-bar" style={{ height: "40%" }}></div>
              <div className="chart-bar" style={{ height: "80%" }}></div>
            </div>
            <div className="chart-labels">
              <span>Organic</span>
              <span>Plastic</span>
              <span>Paper</span>
            </div>
          </div>
          
          <div className="insights-card">
            <h2 className="card-title">Collection Trends</h2>
            <div className="trend-line"></div>
            <p className="trend-text">Weekly collection volume is increasing</p>
          </div>
          
          <div className="insights-card">
            <h2 className="card-title">Efficiency Metrics</h2>
            <div className="metric">
              <span className="metric-value">85%</span>
              <span className="metric-label">Collection Efficiency</span>
            </div>
            <div className="metric">
              <span className="metric-value">92%</span>
              <span className="metric-label">Route Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights; 