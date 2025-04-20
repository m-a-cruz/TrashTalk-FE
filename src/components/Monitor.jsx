import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Monitor.css";
import cam from "../assets/images/cam.png";
import axios from "axios";
import { useState, useEffect  } from "react";

const Monitor = () => {

  const API = import.meta.env.VITE_CAM_API_URL;
  const [data, setData] = useState([]);
  const [bins, setBins] = useState(3);
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}latest`, { withCredentials: true });
        if (response.status === 200) {
          console.log(response.data);
          setData(response.data);
          setDetections(response.data.detections);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000); // 5000ms = 5 seconds
    // return () => clearInterval(interval);
  }, []); 

  return (
    <div className="monitor-wrapper">
      <Navbar />
      <div className="monitor-container">
        <div className="monitor-header">
          <h2 className="monitor-title">Real-time Bin Monitoring</h2>
        </div>
        
        {/* Modify Code if Bin is multiple - Set the bins to the number of bins have*/}
        {bins > 0 && (
          <div className="monitor-grid">
            {Array.from({ length: bins }).map((_, index) => (
              <div className="monitor-card" key={index}>
                <div className="bin-image-container">
                  <img
                    src={`data:image/jpeg;base64,${data.image_annotated_base64}`}
                    alt="Detected"
                    className="bin-image rounded max-w-md mb-4"
                  />
                  <div className="bin-overlay">
                    <span className="bin-number">BIN {index + 1}</span>
                    <span className="bin-location">
                      <i className="fas fa-map-marker-alt"> Bahay ni Kuya</i>
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
                    <span className="detail-value">
                      {data.detections && data.detections.map((d) => d.class_name).join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Monitor; 