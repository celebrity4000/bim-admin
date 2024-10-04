import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdUpcoming,
  MdContactSupport,
  MdOutlineSettings,
  MdAssignmentAdd,
  MdFeedback,
  MdOutlineMailOutline,
  MdOutlinePayment,
  MdOutlineBrandingWatermark,
} from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TbReportAnalytics, TbLogs } from "react-icons/tb";
import {
  GrCatalog,
  GrCertificate,
  GrDocumentPerformance,
} from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { SiHelpdesk } from "react-icons/si";
import { MdWifiCalling3 } from "react-icons/md";
import {
  FaBarsProgress,
  FaMoneyCheckDollar,
  TbStackFilled,
} from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";

const sidebarData = [
  {
    navigate: "/overview",
    name: "Overview",
    icon: <MdDashboard size={30} />,
    isDropdown: false,
  },
  {
    navigate: "/trainingMetrics",
    name: "Training Metrics",
    icon: <TbStackFilled size={30} />,
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
        navigate: "/batches",
        icon: <MdWifiCalling3 size={25} />,
      },
      {
        name: "Assignments & Assessments",
        navigate: "/certifications",
        icon: <MdAssignmentAdd size={25} />,
      },
      {
        name: "Feedback Collection",
        navigate: "/certifications",
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
        navigate: "/sales",
        icon: <GrDocumentPerformance size={25} />,
      },
      {
        name: "Trainee Progress",
        navigate: "/course",
        icon: <FaBarsProgress size={25} />,
      },
      {
        name: "Certification Tracking",
        navigate: "/user",
        icon: <GrCertificate size={25} />,
      },
      {
        name: "Revenue Analytics",
        navigate: "/performance",
        icon: <FaMoneyCheckDollar size={25} />,
      },
      {
        name: "Lead Conversion",
        navigate: "/performance",
        icon: <TbReportAnalytics size={25} />,
      },
      {
        name: "Placement Analytics",
        navigate: "/performance",
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
      {
        name: "Email Settings",
        navigate: "/profileSettings",
        icon: <MdOutlineMailOutline size={25} />,
      },
      {
        name: "Payment Gateway Settings",
        navigate: "/profileSettings",
        icon: <MdOutlinePayment size={25} />,
      },
      {
        name: "Branding Customisation Settings",
        navigate: "/profileSettings",
        icon: <MdOutlineBrandingWatermark size={25} />,
      },
      {
        name: "Permissions",
        navigate: "/user",
        icon: <MdOutlineSettings size={25} />,
      },
    ],
  },
  {
    navigate: "/helpDesk",
    name: "Help and Support",
    icon: <MdContactSupport size={30} />,
    isDropdown: false,
    // items: [
    //   {
    //     name: "Help Desk",
    //     navigate: "/contact",
    //     icon: <SiHelpdesk size={25} />,
    //   },
    //   {
    //     name: "FAQs",
    //     navigate: "/faqs",
    //     icon: <MdContactSupport size={25} />,
    //   },
    // ]
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
