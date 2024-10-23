import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/", "/forgotPassword", "/passwordLink"];
  const shouldShowNavbar = !pathsWithoutNavbar.includes(location.pathname);
  return (
    <div className=" bg-[#f5f5f5] min-h-screen font-Poppins">
      <Navbar />
      <div className="flex  min-h-[calc(100vh-80px)] max-w-[100vw]">
        <div>{shouldShowNavbar && <Sidebar />}</div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
