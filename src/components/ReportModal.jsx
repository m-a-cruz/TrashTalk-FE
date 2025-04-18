import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  ArcElement
} from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import '../assets/styles/ReportModal.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ReportModal = ({ open, onClose, reportData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const donutData = {
    labels: ['Collected', 'Remaining'],
    datasets: [{
      data: [reportData?.totalCollected || 0, reportData?.remaining || 0],
      backgroundColor: ['#4CAF50', '#FFC107'],
      borderWidth: 0,
    }],
  };

  const barData = {
    labels: reportData?.topWaste?.map(item => item.name) || [],
    datasets: [{
      label: 'Amount (kg)',
      data: reportData?.topWaste?.map(item => item.amount) || [],
      backgroundColor: '#4CAF50',
      borderRadius: 5,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount (kg)'
        }
      }
    }
  };

  const generatePDF = async () => {
    const content = document.getElementById('report-content');
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('biodegradable-waste-report.pdf');
    handleClose();
  };

  const generateCSV = () => {
    const topWasteData = reportData?.topWaste?.map(item => 
      `${item.name},${item.amount}`
    ).join('\n');

    const csvContent = `Biodegradable Waste Report\n\n` +
      `Total Collected,${reportData?.totalCollected}\n` +
      `Remaining,${reportData?.remaining}\n\n` +
      `Top Waste Types\nName,Amount(kg)\n${topWasteData}`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'biodegradable-waste-report.csv');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="report-modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '1000px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div id="report-content" className="report-modal-content">
          <div className="report-header">
            <h2 className="report-title">Weekly Biodegradable Waste Report</h2>
            <p className="report-subtitle">Week of {new Date().toLocaleDateString()} | Generated on {new Date().toLocaleString()}</p>
          </div>

          <div className="section">
            <div className="text-discussion">
              <h3 className="section-title">Weekly Collection Overview</h3>
              <p>During this week, our waste collection system has processed a total of <strong>{reportData?.totalCollected} kg</strong> of biodegradable waste, 
              achieving a collection rate of <strong>{reportData?.collectionRate}%</strong>. This represents a 15% increase compared to the previous week, 
              indicating improved collection efficiency.</p>
              <div className="key-metrics">
                <div className="metric">
                  <span className="metric-label">Total Collections:</span>
                  <span className="metric-value">48 trips</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Average Load:</span>
                  <span className="metric-value">52 kg/trip</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Peak Collection Day:</span>
                  <span className="metric-value">Wednesday</span>
                </div>
              </div>
            </div>
            <div className="chart-container">
              <Doughnut data={donutData} options={chartOptions} />
            </div>
          </div>

          <div className="section">
            <div className="text-discussion">
              <h3 className="section-title">Top 10 Biodegradable Waste Analysis</h3>
              <p>Analysis of the collected waste reveals that <strong>{reportData?.topWaste?.[0]?.name}</strong> constitutes the largest portion 
              at <strong>{reportData?.topWaste?.[0]?.amount} kg</strong>. The top three categories account for 
              {reportData?.topWaste?.slice(0, 3).reduce((acc, curr) => acc + curr.amount, 0)} kg, representing 
              {Math.round((reportData?.topWaste?.slice(0, 3).reduce((acc, curr) => acc + curr.amount, 0) / reportData?.totalCollected) * 100)}% 
              of total collections.</p>
              <div className="waste-trends">
                <h4>Key Observations:</h4>
                <ul>
                  <li>Food waste remains the predominant category</li>
                  <li>Garden waste shows seasonal increase</li>
                  <li>Significant reduction in contaminated materials</li>
                </ul>
              </div>
            </div>
            <div className="chart-container">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          <div className="modal-actions">
            <Button onClick={onClose} variant="outlined">
              Close
            </Button>
            <div>
              <Button
                variant="contained"
                onClick={handleClick}
                className="download-button"
              >
                Download
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem onClick={generatePDF}>Download as PDF</MenuItem>
                <MenuItem onClick={generateCSV}>Download as CSV</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ReportModal; 