import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useState, useEffect  } from "react";
import Navbar from "./Navbar";
import "../assets/styles/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_AUTH_API_URL;
  const API2 = import.meta.env.VITE_GAS_API_URL;
  const [selectedBin, setSelectedBin] = useState("bin1");
  const [charts, setCharts] = useState([]);


  useEffect(() => {
    const fetchCharts = async () => {
      const response = await axios.get(`${API2}/charts`, { withCredentials: true });
      if (response.status === 200) {
        setCharts(response.data);
        console.log(response.data);
      }
    };
    fetchCharts();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${API}/logout`, { method: "POST", credentials: "include" });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
              onChange={(e) => setSelectedBin(e.target.value)}
              className="bin-dropdown"
            >
              <option value="bin1">Bin 1</option>
              <option value="bin2">Bin 2</option>
              <option value="bin3">Bin 3</option>
            </select>
          </div>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2 className="card-title">Weekly Waste Collection</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={binData[selectedBin].wasteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="waste" fill="#4CAF50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="dashboard-card">
            <h2 className="card-title">Waste Composition</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={binData[selectedBin].wasteComposition}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {binData[selectedBin].wasteComposition.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="dashboard-card">
            <h2 className="card-title">Collection Efficiency Trend</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={binData[selectedBin].efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="efficiency" stroke="#4CAF50" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
