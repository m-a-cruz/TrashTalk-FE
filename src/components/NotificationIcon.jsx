import { useState, useRef, useEffect } from "react";
import { FaBell, FaCheck, FaExclamationTriangle, FaInfoCircle, FaTrash } from "react-icons/fa";
import axios from "axios";
import "../assets/styles/NotificationIcon.css";

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationRef = useRef(null);
  const API = import.meta.env.VITE_GAS_API_URL;

  // Fetch notifications from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${API}notifications`, { withCredentials: true });
        if (response.status === 200) {
          // const formatted = response.data.map((item, index) => ({
          //   id: item._id.$oid || index,
          //   type: item.data.status.toLowerCase(), // maps 'Info', 'Warning', etc.
          //   title: item.data.status,
          //   message: item.data.message,
          //   time: new Date(item.timestamp.$date).toLocaleString(),
          //   read: false
          // }));
          // setNotifications(formatted);
          console.log(response.data)
        }
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };

    fetchNotifications();
  }, []);

  // Close dropdown when clicking outside
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
    switch (type) {
      case 'warning': return <FaExclamationTriangle className="notification-type-icon warning" />;
      case 'success': return <FaCheck className="notification-type-icon success" />;
      case 'info': return <FaInfoCircle className="notification-type-icon info" />;
      default: return <FaInfoCircle className="notification-type-icon" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

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
            <div className="header-actions">
              {unreadCount > 0 && (
                <button className="mark-all-read" onClick={markAllAsRead}>Mark all as read</button>
              )}
            </div>
          </div>

          <div className="notification-list">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div key={n.id} className={`notification-item ${n.read ? 'read' : 'unread'}`}>
                  <div className="notification-content">
                    <div className="notification-icon-wrapper">{getNotificationIcon(n.type)}</div>
                    <div className="notification-details">
                      <h4 className="notification-title">{n.title}</h4>
                      <p className="notification-message">{n.message}</p>
                      <span className="notification-time">{n.time}</span>
                    </div>
                  </div>
                  <div className="notification-actions">
                    {!n.read && <button className="mark-read-btn" onClick={() => markAsRead(n.id)}><FaCheck /></button>}
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
