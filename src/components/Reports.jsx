import React, { useState } from "react";
import Navbar from "./Navbar";
import ReportModal from "./ReportModal";
import "../assets/styles/Reports.css";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReport = (reportType) => {
    setSelectedReport(reportType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  return (
    <div className="reports-wrapper">
      <Navbar />
      <div className="reports-container">
        {/* <div className="reports-header">
          <h2 className="reports-title">Reports</h2>
        </div> */}
        
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
            <h2 className="card-title">Daily Report</h2>
            <p className="report-date">Generated: May 23, 2025</p>
            {/* <div className="report-summary">
              <p>Total Collections: 150</p>
              <p>Average Efficiency: 85%</p>
            </div> */}
            <button 
              className="view-report-btn"
              onClick={() => handleOpenReport('weekly')}
            >
              View Report
            </button>
          </div>
          
          <div className="report-card">
            <h2 className="card-title">Weekly Gas Analysis</h2>
            <p className="report-date">Generated: May 23, 2025</p>
            {/* <div className="report-summary">
              <p>Total Waste: 2,500 kg</p>
              <p>Recycling Rate: 65%</p>
            </div> */}
            <button 
              className="view-report-btn"
              onClick={() => handleOpenReport('monthly')}
            >
              View Report
            </button>
          </div>
        </div>
      </div>

      <ReportModal
        open={isModalOpen}
        onClose={handleCloseModal}
        // reportData={sampleReportData}
      />
    </div>
  );
};

export default Reports; 