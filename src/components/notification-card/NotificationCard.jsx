import React from "react";
import "./notificationcard.css";

const NotificationCard = ({ time, desc, status }) => {
  return (
    <div className="notification-card-container">
      <span>{time}</span>
      <span
        className={
          status === "Success"
            ? "success"
            : status === "Failed"
            ? "failed"
            : "task"
        }
      >
        {status}
      </span>
      <span className="not-desc">{desc}</span>
    </div>
  );
};

export default NotificationCard;
