import { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaCheck,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTrash
} from "react-icons/fa";
import axios from "axios";
import "../assets/styles/NotificationIcon.css";
import socket from "../assets/js/Notifications";

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationRef = useRef(null);
  const API = import.meta.env.VITE_GAS_API_URL;
  const [showModal, setShowModal] = useState(false);
  const [alertNotification, setAlertNotification] = useState(null);
  // Fetch and listen to new notifications
  useEffect(() => {
    fetchNotifications();

    socket.on("new_notification", (data) => {
      console.log(data)
      setNotifications((prev) => [data, ...prev]);
      if (data.data?.status === "Active" && data.data?.type !== "Safe") {
        setAlertNotification((data));
        setShowModal(true);
      }
      console.log("Alert Notification:", data);
    });
    socket.on("updated_notification", (data) => {
      setNotifications((prev) =>
        prev.map((n) => (n._id?.$oid === data._id?.$oid ? { ...n, ...data } : n))
      );
      console.log(socket.id)
    });

    return () => {
      socket.off("new_notification");
      socket.off("updated_notification");
    };
  }, []);

  // Fetch notifications from backend
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${API}notifications`, {
        withCredentials: true
      });
      if (response.status === 200) {
        setNotifications(
          response.data
            .filter((n) => n.data?.status !== "Deleted")
            .map((n) => ({
              ...n,
              id: n._id?.$oid
            }))
        );
      }
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mark single notification as read
  const markAsRead = async (id) => {
    const success = await updateData(id, "Read");
    if (success) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, data: { ...n.data, status: "Read" } } : n))
      );
    }
  };

  // Mark all as read
  const markAllAsRead = async () => {
    const promises = notifications.map((n) =>
      n.data?.status === "Active" ? updateData(n.id, "Read") : null
    );
    await Promise.all(promises);
    await fetchNotifications();
  };

  // Delete a notification
  const deleteNotification = async (id) => {
    const success = await updateData(id, "Deleted");
    if (success) {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }
  };

  // Reusable status updater
  const updateData = async (id, status) => {
    try {
      const response = await axios.put(
        `${API}notification`,
        { id, status },
        { withCredentials: true }
      );
      return response.status === 201;
    } catch (error) {
      console.log(error.response?.data?.error || error.message);
      return false;
    }
  };

  // Close modal for alert notification
  const handleClose = async () => {
    const success = await updateData(alertNotification._id?.$oid, "Read");
    if (success) {
      setShowModal(false);
      setAlertNotification(null);
      await fetchNotifications();
    }
  };

  const getNotificationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "explosive":
        return <FaExclamationCircle className="notification-type-icon" color="d9534f" />;
      case "critical":
        return <FaExclamationTriangle className="notification-type-icon" color="f0ad4e"/>;
      case "warning":
        return <FaExclamationTriangle className="notification-type-icon" color="ffd500"/>;
      case "safe":
        return <FaCheck className="notification-type-icon success" />;
      case "info":
        return <FaInfoCircle className="notification-type-icon info" />;
      default:
        return <FaInfoCircle className="notification-type-icon" />;
    }
  };

  const unreadCount = notifications.filter((n) => n.data?.status === "Active").length;

  return (
    <div className="notification-container" ref={notificationRef}>
      <div className="notification-icon" onClick={() => setIsOpen((prev) => !prev)}>
        <FaBell />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </div>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <h3>Notifications</h3>
            {unreadCount > 0 && (
              <button className="mark-all-read" onClick={markAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>

          <div className="notification-list">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`notification-item ${
                    n.data?.status === "Active" ? "unread" : "read"
                  }`}
                >
                  <div className="notification-content">
                    <div className="notification-icon-wrapper">
                      {getNotificationIcon(n.data?.type)}
                    </div>
                    <div className="notification-details">
                      <h4 className="notification-title">{n.data?.type}</h4>
                      <p className="notification-message">{n.data?.message}</p>
                      <span className="notification-time">
                        {new Date(n.timestamp?.$date || Date.now()).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="notification-actions">
                    {n.data?.status === "Active" && (
                      <button className="mark-read-btn" onClick={() => markAsRead(n.id)}>
                        <FaCheck />
                      </button>
                    )}
                    <button className="delete-btn" onClick={() => deleteNotification(n.id)}>
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
        </div>
      )}

      {showModal && alertNotification && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>⚠️ Alert Notification</h3>
            <p>
              <strong>Status:</strong> {alertNotification.data?.status}
            </p>
            <p>
              <strong>Type:</strong> {alertNotification.data?.type}
            </p>
            <p>
              <strong>Message:</strong> {alertNotification.data?.message}
            </p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
