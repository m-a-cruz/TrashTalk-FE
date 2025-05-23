import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

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
  const [charts, setCharts] = useState([]);
  const API = import.meta.env.VITE_GAS_API_URL;
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    fetchCharts();
  }, []);

  const fetchCharts = async () => {
    try {
      const response = await axios.get(`${API}charts`, { withCredentials: true });
      setCharts(response.data);
    } catch (error) {
      console.error("Error fetching charts:", error.response || error.message);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const generatePDF = async () => {
    setIsExporting(true);

    setTimeout(async () => {
      const content = document.getElementById('report-content');
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('biodegradable-waste-report.pdf');
      setIsExporting(false);
      handleClose();
    }, 100); // brief delay to allow re-render
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

  const protocols = [
    {
      gas: "Smoke",
      percentage: 35.5,
      risks: ["Fire hazard", "Respiratory irritation"],
      actions: [
        "Install smoke detectors and fire alarms in key areas.",
        "Maintain fire extinguishers and train staff on proper use.",
        "Prohibit open flames or unauthorized burning in monitored zones.",
        "Ensure proper air ventilation to reduce accumulation.",
        "Implement fire drills regularly."
      ],
      icon: "🔥"
    },
    {
      gas: "Methane",
      percentage: 20.6,
      risks: ["Explosive at high concentrations", "Asphyxiation"],
      actions: [
        "Deploy methane detectors and real-time gas monitors.",
        "Avoid using spark-producing equipment nearby.",
        "Implement automatic ventilation systems in confined areas.",
        "Keep the area free of organic waste buildup.",
        "Set automated alerts if methane levels exceed 5% LEL."
      ],
      icon: "🧪"
    },
    {
      gas: "LPG",
      percentage: 9.5,
      risks: ["Highly flammable", "Explosive"],
      actions: [
        "Store LPG cylinders in well-ventilated, shaded areas.",
        "Use flameproof fittings and grounded wiring.",
        "Conduct regular leak checks with gas leak detectors.",
        "Train personnel in LPG emergency response, including valve shutoff."
      ],
      icon: "🏭"
    },
    {
      gas: "Hydrogen",
      percentage: 26.6,
      risks: ["Extremely flammable", "Forms explosive mixtures with air"],
      actions: [
        "Prevent hydrogen buildup with forced-air ventilation.",
        "Ensure anti-static flooring to prevent ignition.",
        "Place warning signs and emergency shut-off systems.",
        "Avoid using metal tools that can spark during maintenance."
      ],
      icon: "⚠️"
    },
    {
      gas: "Carbon Monoxide",
      percentage: 7.7,
      risks: ["Toxic even at low levels", "Causes dizziness and unconsciousness"],
      actions: [
        "Install CO detectors with audible alarms.",
        "Prohibit idling vehicles or fuel-burning equipment in enclosed areas.",
        "Provide personal CO monitors for workers in high-risk zones.",
        "Evacuate and ventilate areas immediately if CO is detected above 35 ppm."
      ],
      icon: "💀"
    }
  ];

  const bestPractices = [
    { name: "Emergency Response Plan", description: "Post visible instructions and evacuation maps.", icon: "🛡️" },
    { name: "PPE Enforcement", description: "Require masks, gas sensors, and flame-resistant clothing for all personnel.", icon: "👷" },
    { name: "Training & Drills", description: "Monthly safety briefings and emergency simulations.", icon: "🧑‍🏫" },
    { name: "Monitoring & Logging", description: "Keep digital logs of gas readings and incidents for trend analysis.", icon: "📊" }
  ];



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
            <h2 className="report-title">Daily Biodegradable Waste Report</h2>
            <p className="report-subtitle">Week of {new Date().toLocaleDateString()} | Generated on {new Date().toLocaleString()}</p>
          </div>

          <div className="section">
            <div className="text-discussion">
              <h3 className="section-title">Daily Overview</h3>
              <p>
                - Methane (cyan line) is the most prominent gas, fluctuating between <strong>0.14</strong> and <strong>0.16</strong>, 
                which suggests significant methane presence in the monitored environment.
                <br /><br />
                - Other gases (CO, Hydrogen, LPG, and Smoke) remain relatively low, staying close to 0, indicating their concentrations are minimal during this timeframe.
                <br />
              </p>
            </div>
            <div className="chart-container">
              {charts.filter((chart) => chart.title === 'hourlyMonitoring').map((chart, index) => (
                <div className="chart-content" key={index}>
                  {isExporting ? (
                    <div style={{
                      height: '400px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#eee',
                      border: '1px solid #ccc',
                      color: '#333',
                      fontStyle: 'italic'
                    }}>
                      Chart not available in export preview
                    </div>
                  ) : (
                    <iframe
                      src={chart.link}
                      title={chart.title}
                      style={{ border: 'none', width: '100%', height: '400px' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="text-discussion">
              <h3 className="section-title">🧠 Overall Insight</h3>
              <p>- Smoke is the dominant gas, 
                which may signal poor air quality or ongoing combustion sources 
                (e.g., trash burning, industrial emissions).
                <br /><br />- Combustible and toxic gases (e.g., Methane, LPG, Carbon Monoxide) are all present — indicating a need for environmental monitoring and potentially ventilation improvements.
                <br /><br />- The relatively high percentage of Hydrogen might require further investigation depending on the area’s typical emissions profile.</p>
            </div>
            <div className="chart-container">
              {charts.filter((chart) => chart.title === 'percentage').map((chart, index) => (
                <div className="chart-content" key={index}>
                  <iframe
                    src={chart.link}
                    title={chart.title}
                    style={{ border: 'none', width: '100%', height: '400px' }}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>🔐 General Gas Safety Protocols for Waste Monitoring Environments</h2>
            {protocols.map((item) => (
              <div key={item.gas} style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "10px" }}>
                <h3>{item.icon} {item.gas} ({item.percentage}%)</h3>
                <p><strong>Risks:</strong> {item.risks.join(", ")}</p>
                <ul>
                  {item.actions.map((action, index) => <li key={index}>{action}</li>)}
                </ul>
              </div>
            ))}
            <h2>🛡️ Additional Best Practices</h2>
            <ul>
              {bestPractices.map((practice) => (
                <li key={practice.name}><strong>{practice.icon} {practice.name}:</strong> {practice.description}</li>
              ))}
            </ul>
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