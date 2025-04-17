import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Reports.css";

const Reports = () => {
  return (
    <div className="reports-wrapper">
      <Navbar />
      <div className="reports-container">
        <div className="reports-header">
          <h2 className="reports-title">Reports</h2>
        </div>
        
        <div className="reports-actions">
          <button className="generate-report-btn">Generate New Report</button>
          {/* <div className="report-filters">
            <select className="filter-select">
              <option>All Time</option>
              <option>Last Week</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </select>
          </div> */}
        </div>
        
        <div className="reports-grid">
          <div className="report-card">
            <h2 className="card-title">Weekly Collection Report</h2>
            <p className="report-date">Generated: March 15, 2024</p>
            <div className="report-summary">
              <p>Total Collections: 150</p>
              <p>Average Efficiency: 85%</p>
            </div>
            <button className="view-report-btn">View Report</button>
          </div>
          
          <div className="report-card">
            <h2 className="card-title">Monthly Waste Analysis</h2>
            <p className="report-date">Generated: March 1, 2024</p>
            <div className="report-summary">
              <p>Total Waste: 2,500 kg</p>
              <p>Recycling Rate: 65%</p>
            </div>
            <button className="view-report-btn">View Report</button>
          </div>
          
          <div className="report-card">
            <h2 className="card-title">Route Optimization Report</h2>
            <p className="report-date">Generated: February 28, 2024</p>
            <div className="report-summary">
              <p>Routes Analyzed: 12</p>
              <p>Optimization Potential: 15%</p>
            </div>
            <button className="view-report-btn">View Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 