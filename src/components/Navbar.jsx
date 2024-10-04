import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
  // State for tracking notifications
  const [notifications, setNotifications] = useState(3); // Example number of notifications

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
        <div className="relative group">
          <IoNotifications className="text-gray-600 text-[24px] cursor-pointer w-6 h-6 group-hover:text-black group-hover:w-7 group-hover:h-7 transition-all duration-300" />

          {notifications > 0 && (
            <span className="absolute top-[-5px] right-[-5px] bg-gray-600 group-hover:bg-red-600 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full transition-all duration-300">
              {notifications}
            </span>
          )}
        </div>
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
