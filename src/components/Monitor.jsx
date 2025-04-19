import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Monitor.css";
import cam from "../assets/images/cam.png";
import axios from "axios";
import { useState, useEffect  } from "react";

const Monitor = () => {
  const bins = [
    {
      id: 1,
      image: cam,
      location: "ST Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum"
    },
    {
      id: 2,
      image: cam,
      location: "Admin Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum"
    },
    {
      id: 3,
      image: cam,
      location: "MTV Building",
      timestamp: "08/04/2025 | 09:45",
      wasteType: "Lorem ipsum, Lorem ipsum"
    }
  ];

  const API = import.meta.env.VITE_CAM_API_URL;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}latest`, { withCredentials: true });
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="monitor-wrapper">
      <Navbar />
      <div className="monitor-container">
        <div className="monitor-header">
          <h2 className="monitor-title">Real-time Bin Monitoring</h2>
        </div>
        
        <div className="monitor-grid">
          {bins.map((bin) => (
            <div key={bin.id} className="monitor-card">
              <div className="bin-image-container">
                {/* <img src={bin.image} alt={`Bin ${bin.id}`} className="bin-image" /> */}
                <img
                  src={`data:image/jpeg;base64,${data.image_annotated_base64}`}
                  alt="Detected"
                  className="rounded shadow-md w-full max-w-md mb-4"
                />
                <div className="bin-overlay">
                  <span className="bin-number">BIN {bin.id}</span>
                  <span className="bin-location">
                    <i className="fas fa-map-marker-alt"></i> {bin.location}
                  </span>
                </div>
              </div>
              <div className="bin-details">
                <div className="detail-row">
                  <span className="detail-label">TIMESTAMP</span>
                  <span className="detail-value">{data.timestamp}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">WASTE TYPE</span>
                  {data.detections.map((detection, index) => (
                    // <span key={index} className="detail-value">{detection.class_name}</span>
                    <li key={index} className="text-sm">
                      {detection.class_name} ({(detection.confidence * 100).toFixed(1)}%)
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitor; 