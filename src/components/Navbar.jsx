import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
  // State for tracking notifications
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Payment due for the course",
      type: "payment",
      time: "2 days ago",
      read: false,
    },
    {
      id: 2,
      message: "Session feedback pending",
      type: "feedback",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      message: "Upcoming assessment in 3 days",
      type: "assessment",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 4,
      message: "New course added",
      type: "course",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 5,
      message: "Payment due for the course",
      type: "payment",
      time: "2 days ago",
      read: true,
    },
    {
      id: 6,
      message: "Session feedback pending",
      type: "feedback",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 7,
      message: "Upcoming assessment in 3 days",
      type: "assessment",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 8,
      message: "New course added",
      type: "course",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 9,
      message: "Payment due for the course",
      type: "payment",
      time: "2 days ago",
      read: false,
    },
    {
      id: 10,
      message: "Session feedback pending",
      type: "feedback",
      time: "5 hours ago",
      read: false,
    },
  ]);

  // Count unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky top-0 z-50">
      <Link>
        <img
          src={Logo}
          alt="Logo"
          className="w-[200px] h-[60px] object-cover"
        />
      </Link>

      <div className="relative px-1 hover:px-0">
        <div className="relative group" onClick={toggleModal}>
          <IoNotifications className="text-gray-600 text-[24px] cursor-pointer w-6 h-6 group-hover:text-black group-hover:w-7 group-hover:h-7" />

          {unreadCount > 0 && (
            <span className="absolute top-[-5px] right-[-5px] bg-gray-600 group-hover:bg-red-600 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">
              {unreadCount}
            </span>
          )}
        </div>

        {isModalOpen && (
          <div className="absolute right-0 mt-2 max-h-80 overflow-y-scroll w-[300px] bg-white shadow-lg border border-gray-200 rounded-lg z-50">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Notifications</h3>
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <li
                      key={notification.id}
                      className={`border-b border-gray-100 py-2 px-2 my-1 cursor-pointer rounded-lg ${
                        notification.read
                          ? "bg-gray-100 text-gray-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                      onClick={() => markAsRead(notification.id)}>
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">No notifications</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Uncomment this if you want a language selection dropdown */}
      {/* <select className="w-[57px] h-[32px]  border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px] ">
        <option value="">EN</option>
        <option value="">EN</option>
        <option value="">EN</option>
      </select> */}
    </div>
  );
}

export default Navbar;
