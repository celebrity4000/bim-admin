import React from "react";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuUsers } from "react-icons/lu";

function Settings() {
  return (
    <div className=" ml-[32px] mt-[32px]">
      <div className=" mb-[24px] ">
        <h1 className="text-[24px] font-[700]">Settings</h1>
        <p className="text-[14px] font-[400] text-[#72849A]">
          BIM's general settings
        </p>
      </div>

      <div className=" flex items-center gap-4">
        <Link to="changePassword">
          <div className=" w-[305px] h-[85px] bg-[#EEEEEE] flex items-center justify-between px-4 rounded-[8px]">
            <div>
              <h1 className="text-[14px] font-semibold">Security</h1>
              <p className="text-[#72849A] text-[13px]">change your password</p>
            </div>
            <div className="w-[48px] h-[48px] rounded-[50%] bg-pink flex items-center justify-center">
              <CiLock size={30} color="#fff" />
            </div>
          </div>
        </Link>
        <Link to="adminList">
          <div className=" w-[305px] h-[85px] bg-[#EEEEEE] flex items-center justify-between px-2 rounded-[8px]">
            <div>
              <h1 className="text-[14px] font-semibold">Manage Roles</h1>
              <p className="text-[#72849A] text-[13px]">
                Create new user's roles.
              </p>
            </div>
            <div className="w-[48px] h-[48px] rounded-[50%] bg-pink flex items-center justify-center">
              <LuUsers size={30} color="#fff" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
