import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdUpcoming, MdVideoCall } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdWifiCalling3 } from "react-icons/md";
import { TbLogs, TbStackFilled } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
const sidebarData = [
  { navigate: "/overview", name: "Overview", icon: <MdDashboard size={30} /> },
  {
    navigate: "/trainingMetrics",
    name: "Training Metrics",
    icon: <TbStackFilled size={30} />,
  },
  { navigate: "/blog", name: "Blogs", icon: <TbLogs size={30} /> },
  // { navigate: "/user", name: "Users", icon: <FiUsers size={30} /> },
  {
    navigate: "/courseManagement",
    name: "Course ",
    icon: <MdWifiCalling3 size={30} />,
  },
  {
    navigate: "/upcomingSeasons",
    name: "Upcoming Seasons ",
    icon: <MdUpcoming size={30} />,
  },
  { navigate: "/class", name: "Video Class", icon: <MdVideoCall size={30} /> },
  // {
  //   navigate: "/settings",
  //   name: "Settings",
  //   icon: <MdOutlineSettings size={30} />,
  // },
];

function Sidebar() {
  return (
    <div className="w-[300px] bg-[#fff] min-h-[calc(100vh-80px)] sticky top-[80px]">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 ">
        <div className=" overflow-auto pl-2 sticky top-[90px]">
          <nav className="grid gap-[20px] items-start pl-4  text-sm font-medium">
            {sidebarData.map((item) => (
              <NavLink
                key={item.name}
                className={({ isActive }) =>
                  ` flex items-center gap-3 rounded-l-[10px] px-3 py-2  transition-all hover:text-darkgray dark:text-gray-400 dark:hover:text-gray-50 ${
                    isActive
                      ? "bg-[#F5F5F5] border-r-4 border-pink text-darkgray font-[600]"
                      : "text-[#455560] "
                  }`
                }
                to={item.navigate}>
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
