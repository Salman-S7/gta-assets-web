import React from "react";
import "./notification.css";
import { notificationData } from "../../utils/data";
import NotificationCard from "../../components/notification-card/NotificationCard";

const Notification = () => {
  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      {notificationData.map((notification, i) => {
        return (
          <NotificationCard
            key={i}
            time={notification.time}
            status={notification.status}
            desc={notification.desc}
          />
        );
      })}
    </div>
  );
};

export default Notification;
