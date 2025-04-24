import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Monitor.css";
import axios from "axios";
import { useState, useEffect  } from "react";

const Monitor = () => {
  const API = import.meta.env.VITE_CAM_API_URL;
  const [data, setData] = useState({});
  const [bins, setBins] = useState(3);
  const [detections, setDetections] = useState([]);
  const [loading, setLoading] = useState(true);
  const classCounts = useClassCounts(detections);


  useEffect(() => {
    fetchData(); // initial trigger on mount
    const interval = setInterval(() => {
      fetchData(); // process -> then fetch
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // start loading
      const response = await axios.get(`${API}latest`, { withCredentials: true });
      if (response.status === 200) {
        setData(response.data);
        setDetections(response.data.detections);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // stop loading
    }
  };
 
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
                  {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <img
                        src={`data:image/jpeg;base64,${data.image_annotated_base64}`}
                        alt="Detected"
                        className="bin-image rounded"
                        style={{ width: '100%', height: '100%' }}
                      />
                    )
                  }
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
                    <span className="detail-value">{data.timestamp && new Date(data.timestamp).toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">WASTE TYPE</span>
                    <span className="detail-value">
                      {/* {detections && detections.map((d) => d.class_name).join(", ")} */}
                      {Object.entries(classCounts).length > 0 ? (
                        Object.entries(classCounts).map(([name, count]) => (
                          <span key={name}>
                            {count} {name} ,&nbsp;
                          </span>
                        ))
                      ) : (
                        <p>No detections.</p>
                      )}
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


export function useClassCounts(detections) {
  const [classCounts, setClassCounts] = useState({});

  useEffect(() => {
    if (detections && detections.length > 0) {
      const counts = detections.reduce((acc, d) => {
        acc[d.class_name] = (acc[d.class_name] || 0) + 1;
        return acc;
      }, {});
      setClassCounts(counts);
    } else {
      setClassCounts({});
    }
  }, [detections]);

  return classCounts;
}
