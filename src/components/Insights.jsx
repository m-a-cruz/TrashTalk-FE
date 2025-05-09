import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../assets/styles/Insights.css";
import axios from "axios";


const Insights = () => {

  const statusCards = [
    {
      title: 'Current Gas Level',
      value: '100 ppm',
      change: '+ 2.5%',
      color: '#00bcd4'
    },
    {
      title: 'Predicted (1h)',
      value: '115 ppm',
      change: '+ 15%',
      color: '#ce93d8'
    },
    {
      title: 'Predicted (24h)',
      value: '150 ppm',
      change: '+ 50%',
      color: '#f48fb1'
    },
    {
      title: 'Threshold Alert',
      value: '10 ppm',
      status: 'Safe Zone',
      color: '#9fa8da'
    }
  ];

  const API = import.meta.env.VITE_INS_API_URL;
  const API2 = import.meta.env.VITE_GAS_API_URL;
  const [charts, setCharts] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchGasData();
    fetchChartData();
  }, []);
  
  const fetchGasData = async () => {
    try {
      const response = await axios.get(`${API}forcast`, { withCredentials: true });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChartData = async () => {
    try {
      const response = await axios.get(`${API2}charts`, { withCredentials: true });
      if (response.status === 200) {
        // console.log(response.data);
        setCharts(response.data);
      }
    } catch (error) { 
      console.error(error);
    }
  }


  return (
    <div className="insights-wrapper">
      <Navbar />
      <div className="insights-container">
        {/* <div className="insights-header">
          <h2 className="insights-title">Analytics & Predictions</h2>
        </div> */}
        
        <div className="insights-content">
          <div className="chart-section">
            <div className="chart-card">
              {Array.isArray(charts) && charts.filter((chart) => chart.title === 'prediction').map((chart, index) => (
                <div className="chart-content" key={index}>
                  <iframe
                    height="400"
                    width="100%"
                    src={chart.link}
                    title={chart.title} // Always good to add a title for accessibility
                    style={{ border: 'none' }}
                ></iframe>
                </div>
              ))}
            </div>
          </div>

          <div className="status-cards">
            {statusCards.map((card, index) => (
              <div 
                key={index} 
                className="status-card"
                style={{ backgroundColor: card.color }}
              >
                <h3 className="status-card-title">{card.title}</h3>
                <div className="status-card-value">{card.value}</div>
                {card.change && (
                  <div className="status-card-change">{card.change}</div>
                )}
                {card.status && (
                  <div className="status-card-status">{card.status}</div>
                )}
              </div>
            ))}
          </div>

          <div className="insights-details">
            <div className="insights-summary">
              <h3>Insights and Summaries</h3>
              <div className="status-indicators">
                <span className="status-dot safe">Safe</span>
                <span className="status-dot caution">Caution</span>
                <span className="status-dot alert">Alert</span>
              </div>
              <ul className="insights-list">
                {data.insights?.map((insight, index) => (
                  <li key={index} className={`insight-item ${insight[index]}`}>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="time-data-table">
              {Array.isArray(charts) && charts.filter((chart) => chart.title === 'APtable').map((chart, index) => (
                <div className="chart-content" key={index}>
                  <iframe
                    height="600"
                    width="100%"
                    src={chart.link}
                    title={chart.title} // Always good to add a title for accessibility
                    style={{ border: 'none' }}
                ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights; 