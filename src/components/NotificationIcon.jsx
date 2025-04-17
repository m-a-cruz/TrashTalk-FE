import { useState, useRef, useEffect } from "react";
import { FaBell, FaCheck, FaExclamationTriangle, FaInfoCircle, FaTrash } from "react-icons/fa";
import "../assets/styles/NotificationIcon.css";

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Bin #123 is 80% full',
      message: 'Please schedule a collection soon',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Collection Completed',
      message: 'Route #5 has been successfully completed',
      time: '4 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New Waste Type Detected',
      message: 'Unusual waste type found in Bin #456',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'warning',
      title: 'Maintenance Required',
      message: 'Sensor in Bin #789 needs calibration',
      time: '2 days ago',
      read: true
    }
  ]);
  const notificationRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const markAsRead = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning':
        return <FaExclamationTriangle className="notification-type-icon warning" />;
      case 'success':
        return <FaCheck className="notification-type-icon success" />;
      case 'info':
        return <FaInfoCircle className="notification-type-icon info" />;
      default:
        return <FaInfoCircle className="notification-type-icon" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="notification-container" ref={notificationRef}>
      <div className="notification-icon" onClick={toggleDropdown}>
        <FaBell />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </div>
      
      {isOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <h3>Notifications</h3>
            <div className="header-actions">
              {unreadCount > 0 && (
                <button className="mark-all-read" onClick={markAllAsRead}>
                  Mark all as read
                </button>
              )}
            </div>
          </div>
          
          <div className="notification-list">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                >
                  <div className="notification-content">
                    <div className="notification-icon-wrapper">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="notification-details">
                      <h4 className="notification-title">{notification.title}</h4>
                      <p className="notification-message">{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  </div>
                  <div className="notification-actions">
                    {!notification.read && (
                      <button 
                        className="mark-read-btn"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button 
                      className="delete-btn"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <FaTrash />
                    </button>
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