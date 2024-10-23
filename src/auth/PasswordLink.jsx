import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function PasswordLink() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className=" w-[340px] h-[394px] bg-[#fff] py-[24px] px-5 rounded-[8px]">
        <div className="w-full flex items-center justify-center">
          <div className=" w-[100px] h-[100px] bg-[#76BC213D] rounded-[50%] flex items-center justify-center  ">
            <IoCheckmark size={40} color="#76BC21" />
          </div>
        </div>
        <h1 className="text-gray text-3xl font-semibold text-center mt-[10px] mb-[15px] ">
          Your password reset link is on its way.
        </h1>
        <p className="mt-[15px] text-center text-[14px]">
          You'll soon get an email with your password reset link.
        </p>
        <button
          onClick={() => navigate("/")}
          className=" w-[100%] h-[50px] bg-pink text-[#fff] rounded-[8px] mt-[30px] font-[500] "
        >
          Back to log in
        </button>
      </div>
    </div>
  );
}

export default PasswordLink;
