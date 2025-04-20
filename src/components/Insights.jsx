import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Insights.css";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Insights = () => {
  const chartData = {
    labels: Array.from({ length: 36 }, (_, i) => i),
    datasets: [
      {
        label: 'Actual Data',
        data: [100, 118, 95, 70, 55, 52, 50, 52, 60, 110, 108, 92, 90, 115],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Predicted Data',
        data: [100, 118, 96, 72, 57, 54, 51, 53, 62, 112, 110, 95, 92, 118],
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Predictive Area Chart'
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Gas Concentration (ppm)'
        },
        min: 40,
        max: 140,
      },
      x: {
        title: {
          display: true,
          text: 'Time (hours)'
        }
      }
    }
  };

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

  const insights = [
    {
      status: 'safe',
      text: 'Base on current trend, the gas level may exceed safe limits in 3 hours'
    },
    {
      status: 'caution',
      text: 'Daily average is predicted to rise by 15% tomorrow.'
    }
  ];

  const timeData = [
    {
      timestamp: '10:00 am',
      actual: '20 ppm',
      predicted: '22 ppm',
      difference: '+2 ppm'
    },
    {
      timestamp: '11:00 am',
      actual: '23 ppm',
      predicted: '25 ppm',
      difference: '+2 ppm'
    }
  ];

  const API = import.meta.env.VITE_GAS_API_URL;
  


  return (
    <div className="insights-wrapper">
      <Navbar />
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Analytics & Predictions</h2>
        </div>
        
        <div className="insights-content">
          <div className="chart-section">
            <div className="chart-card">
              <Line data={chartData} options={chartOptions} />
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
                {insights.map((insight, index) => (
                  <li key={index} className={`insight-item ${insight.status}`}>
                    {insight.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="time-data-table">
              <table>
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Actual</th>
                    <th>Predicted</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {timeData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.timestamp}</td>
                      <td>{row.actual}</td>
                      <td>{row.predicted}</td>
                      <td>{row.difference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights; 