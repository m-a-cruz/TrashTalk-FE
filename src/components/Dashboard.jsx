import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useState, useEffect  } from "react";
import Navbar from "./Navbar";
import "../assets/styles/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_GAS_API_URL;
  const [selectedBin, setSelectedBin] = useState(1);
  const [charts, setCharts] = useState([]);

  const fetchCharts = async () => {
    try {
      const response = await axios.get(`${API}charts`, { withCredentials: true });
      setCharts(response.data);
    } catch (error) {
      console.error("Error fetching charts:", error.response || error.message);
    }
  };
  
  useEffect(() => {
    fetchCharts();
  }, []);
  
  return (
    <div className="dashboard-wrapper"> 
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="bin-selector">
            <label htmlFor="bin-select">Select Bin:</label>
            <select 
              id="bin-select" 
              value={selectedBin} 
              onChange={(e) => setSelectedBin(Number(e.target.value))}
              className="bin-dropdown"
            >
              {[...new Set(charts.map(chart => chart.bin))]
                .filter(bin => bin) 
                .map((bin, index) => (
                  <option key={index} value={bin}>Bin {bin}</option>
                ))
              }
            </select>
          </div>
        </div>
  
        {/* Unified grid for all charts */}
        <div className="dashboard-grid">
          {charts.filter(chart => chart.bin === selectedBin).map((chart, index) => {
            const baseClass = `chart-${chart.bin}-${chart.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
            
            return (
              <div 
                key={index} 
                className={`dashboard-card ${baseClass}`}
              >
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={500}>
                    <iframe src={chart.link} title={chart.title}></iframe>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
};

export default Dashboard;