import { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaCheck,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTrash
} from "react-icons/fa";
import axios from "axios";
import "../assets/styles/NotificationIcon.css";

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationRef = useRef(null);
  const API = import.meta.env.VITE_GAS_API_URL;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${API}notifications`, { withCredentials: true });
        if (response.status === 200) {
          setNotifications(response.data.map((n) => ({
            ...n,
            id: n._id?.$oid || Math.random().toString(),
            read: false
          })));
        }
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'warning': return <FaExclamationTriangle className="notification-type-icon warning" />;
      case 'success': return <FaCheck className="notification-type-icon success" />;
      case 'info': return <FaInfoCircle className="notification-type-icon info" />;
      default: return <FaInfoCircle className="notification-type-icon" />;
    }
  };

  const unreadCount = notifications.filter(n => n.data?.status === 'Active').length;

  return (
    <div className="notification-container" ref={notificationRef}>
      <div className="notification-icon" onClick={() => setIsOpen(prev => !prev)}>
        <FaBell />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </div>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <h3>Notifications</h3>
            {unreadCount > 0 && (
              <button className="mark-all-read" onClick={markAllAsRead}>Mark all as read</button>
            )}
          </div>

          <div className="notification-list">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div key={n.id} className={`notification-item ${n.data?.status === 'Active' ? 'read' : 'unread'}`}>
                  <div className="notification-content">
                    <div className="notification-icon-wrapper">{getNotificationIcon(n.data?.type)}</div>
                    <div className="notification-details">
                      <h4 className="notification-title">{n.data?.type}</h4>
                      <p className="notification-message">{n.data?.message}</p>
                      <span className="notification-time">{new Date(n.timestamp?.$date).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="notification-actions">
                    {n.data?.status === 'Active' && (
                      <button className="mark-read-btn" onClick={() => markAsRead(n.id)}><FaCheck /></button>
                    )}
                    <button className="delete-btn" onClick={() => deleteNotification(n.id)}><FaTrash /></button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-notifications">
                <FaBell className="empty-icon" />
                <p>No notifications</p>
              </div>
            )}
          </div>

          <div className="dropdown-footer">
            <button className="view-all">View All Notifications</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
