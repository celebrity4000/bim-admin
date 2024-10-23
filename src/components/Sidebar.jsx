import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdContactSupport,
  MdOutlineSettings,
  MdAssignmentAdd,
  MdFeedback,
  MdOutlineMailOutline,
  MdOutlinePayment,
  MdOutlineBrandingWatermark,
} from "react-icons/md";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { TbReportAnalytics, TbLogs } from "react-icons/tb";
import {
  GrCatalog,
  GrCertificate,
  GrDocumentPerformance,
} from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { SiHelpdesk } from "react-icons/si";
import { MdWifiCalling3 } from "react-icons/md";
import { FaBarsProgress, FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";

const sidebarData = [
  {
    navigate: "/overview",
    name: "Overview",
    icon: <MdDashboard size={30} />,
    isDropdown: true,
    items: [
      {
        name: "Overview Catalog",
        navigate: "/overview",
        icon: <MdDashboard size={25} />,
      },
      // {
      //   name: "Upcoming Seasons",
      //   navigate: "/upcomingSeasons",
      //   icon: <MdDashboard size={25} />,
      // },
      {
        name: "Training Metrics",
        navigate: "/trainingMetrics",
        icon: <MdDashboard size={25} />,
      },
    ],
  },
  {
    navigate: "/blog",
    name: "Blogs",
    icon: <TbLogs size={30} />,
    isDropdown: false,
  },
  {
    navigate: "/user",
    name: "User Management",
    icon: <FiUsers size={30} />,
    isDropdown: true,
    items: [
      {
        name: "Treinees",
        navigate: "/treinee",
        icon: <FiUsers size={25} />,
      },
      {
        name: "Treiners",
        navigate: "/treiner",
        icon: <FiUsers size={25} />,
      },
      // {
      //   name: "Roles and Permissions",
      //   navigate: "/rolesandpermissions",
      //   icon: <FiUsers size={25} />,
      // },
    ],
  },
  {
    navigate: "/courseManagement",
    name: "Course Management",
    icon: <MdWifiCalling3 size={30} />,
    isDropdown: true,
    items: [
      {
        name: "Course Catalog",
        navigate: "/courseCatelog",
        icon: <GrCatalog size={25} />,
      },
      {
        name: "Batch Management",
        navigate: "/batchesManagement",
        icon: <MdWifiCalling3 size={25} />,
      },
      {
        name: "Assignment & Assessments",
        navigate: "/assignmentsAndAssesments",
        icon: <MdAssignmentAdd size={25} />,
      },
      {
        name: "Feedback Collection",
        navigate: "/feedbackCollection",
        icon: <MdFeedback size={25} />,
      },
    ],
  },
  {
    navigate: "/reports",
    name: "Reports and Analytics",
    icon: <TbReportAnalytics size={30} />,
    isDropdown: true,
    items: [
      {
        name: "Batch Performance",
        navigate: "/batchPerformance",
        icon: <GrDocumentPerformance size={25} />,
      },
      {
        name: "Trainee Progress",
        navigate: "/traineeProgress",
        icon: <FaBarsProgress size={25} />,
      },
      {
        name: "Certification Tracking",
        navigate: "/certificationTracking",
        icon: <GrCertificate size={25} />,
      },
      {
        name: "Revenue Analytics",
        navigate: "/revenueAnalytics",
        icon: <FaMoneyCheckDollar size={25} />,
      },
      {
        name: "Lead Conversion",
        navigate: "/leadConversion",
        icon: <TbReportAnalytics size={25} />,
      },
      {
        name: "Placement Analytics",
        navigate: "/placementAnalytics",
        icon: <IoMdAnalytics size={25} />,
      },
    ],
  },
  {
    navigate: "/settings",
    name: "Settings and Customisation",
    icon: <MdOutlineSettings size={30} />,
    isDropdown: true,
    items: [
      {
        name: "Profile Settings",
        navigate: "/profileSettings",
        icon: <MdOutlineSettings size={25} />,
      },
      // {
      //   name: "Email Settings",
      //   navigate: "/emailSettings",
      //   icon: <MdOutlineMailOutline size={25} />,
      // },
      // {
      //   name: "Payment Gateway Settings",
      //   navigate: "/paymentGatewaySettings",
      //   icon: <MdOutlinePayment size={25} />,
      // },
      // {
      //   name: "Branding Customisation Settings",
      //   navigate: "/brandingCustomisationSettings",
      //   icon: <MdOutlineBrandingWatermark size={25} />,
      // },
      // {
      //   name: "Permissions",
      //   navigate: "/permissions",
      //   icon: <MdOutlineSettings size={25} />,
      // },
    ],
  },
  {
    navigate: "/helpDesk",
    name: "Help and Support",
    icon: <MdContactSupport size={30} />,
    isDropdown: false,
  },
];

function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  return (
    <div className="w-[300px] bg-[#fff] min-h-[calc(100vh-80px)] sticky top-[80px]">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
        <div className="overflow-auto pl-2 sticky top-[90px]">
          <nav className="grid gap-[20px] items-start pl-4 text-sm font-medium">
            {sidebarData.map((item, index) => (
              <div key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    `flex justify-between items-center rounded-l-[10px] px-3 py-2 transition-all hover:text-darkgray dark:text-gray-400 dark:hover:text-gray-50 ${
                      isActive && !item.isDropdown
                        ? "bg-[#F5F5F5] border-r-4 border-pink text-darkgray font-[600]"
                        : "text-[#455560]"
                    }`
                  }
                  to={item.isDropdown ? "#" : item.navigate}
                  onClick={() => item.isDropdown && toggleDropdown(index)}>
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                  {item.isDropdown && (
                    <div className="justify-end">
                      {dropdownOpen !== index ? (
                        <RiArrowDropDownFill size={20} />
                      ) : (
                        <RiArrowDropUpFill size={20} />
                      )}
                    </div>
                  )}
                </NavLink>

                {/* Dropdown Section */}
                {item.isDropdown && dropdownOpen === index && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-l-[10px] px-3 py-2 transition-all hover:text-darkgray dark:text-gray-400 dark:hover:text-gray-50 ${
                            isActive
                              ? "bg-[#F5F5F5] border-r-4 border-pink text-darkgray font-[600]"
                              : "text-[#455560]"
                          }`
                        }
                        to={subItem.navigate}>
                        {subItem.icon}
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
