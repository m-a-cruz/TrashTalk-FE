import React, { useState } from "react";
import Navbar from "./Navbar";
import ReportModal from "./ReportModal";
import "../assets/styles/Reports.css";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data - replace with actual data from your backend
  const sampleReportData = {
    totalCollected: 2500,
    remaining: 500,
    collectionRate: 83.33,
    topWaste: [
      { name: 'Food Waste', amount: 800 },
      { name: 'Garden Waste', amount: 600 },
      { name: 'Fruit Peels', amount: 400 },
      { name: 'Vegetable Scraps', amount: 300 },
      { name: 'Coffee Grounds', amount: 150 },
      { name: 'Tea Bags', amount: 100 },
      { name: 'Eggshells', amount: 50 },
      { name: 'Bread', amount: 40 },
      { name: 'Paper Towels', amount: 30 },
      { name: 'Leaves', amount: 20 }
    ]
  };

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
            <button 
              className="view-report-btn"
              onClick={() => handleOpenReport('weekly')}
            >
              View Report
            </button>
          </div>
          
          <div className="report-card">
            <h2 className="card-title">Monthly Waste Analysis</h2>
            <p className="report-date">Generated: March 1, 2024</p>
            <div className="report-summary">
              <p>Total Waste: 2,500 kg</p>
              <p>Recycling Rate: 65%</p>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => handleOpenReport('monthly')}
            >
              View Report
            </button>
          </div>
          
          <div className="report-card">
            <h2 className="card-title">Route Optimization Report</h2>
            <p className="report-date">Generated: February 28, 2024</p>
            <div className="report-summary">
              <p>Routes Analyzed: 12</p>
              <p>Optimization Potential: 15%</p>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => handleOpenReport('route')}
            >
              View Report
            </button>
          </div>
        </div>
      </div>

      <ReportModal
        open={isModalOpen}
        onClose={handleCloseModal}
        reportData={sampleReportData}
      />
    </div>
  );
};

export default Reports; 