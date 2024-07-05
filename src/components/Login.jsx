import React from "react";
import titleLogo from "../assets/title-logo.png";
import image from "../assets/page-img.png";

export default function Login({ onClick }) {
  return (
    <>
      <div className="fixed w-[575px] h-[494px] mt-[200px] ml-[250px] bg-white rounded-[35px] border border-solid border-[#d3ddef]">
        <img
          className="relative w-[150px] mt-8 ml-10"
          src={titleLogo}
          alt="Logo Image"
        />

        <div className="w-[78px] h-[38px]">
          <div className="fixed mt-8 ml-10 [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#193379] text-[32px] tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Login
          </div>
        </div>

        <div className="relative w-[500px] h-[19px]">
          <p className="fixed w-[500px] mt-12 ml-10 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-[#363c46] text-base tracking-[-0.16px] leading-[normal]">
            Seamless Phone Verification and OTP Authentication Process
          </p>
        </div>

        <div className="relative w-[496px] h-[102px]">
          <div className="fixed w-[498px] h-[102px] mt-[80px] ml-10">
            <label className="absolute [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#8b97a2] text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap">
              Phone number
            </label>
            <div className="absolute w-[500px] h-16 top-[38px] left-0">
              <div className="relative w-[496px] h-16 bg-[#ebeff4] rounded-[10px]">
                <input
                  className="absolute top-5 left-[121px] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-[#292d31] text-xl bg-[#ebeff4] whitespace-nowrap outline-none"
                  type="number"
                  placeholder="Verify your phone number"
                />

                <div className="absolute top-5 left-[18px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#292d31] text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap">
                  +91
                </div>
                <div className="absolute w-0.5 h-[35px] top-[15px] left-24 bg-[#8593a4] rounded-[20px]" />
                <img
                  className="absolute w-3 h-1.5 top-7 left-[59px]"
                  alt="Shape"
                  src="shape.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[496px] h-16">
          <div className="fixed w-[498px] h-16 mt-[110px] ml-10">
            <div className="relative w-[496px] h-16 bg-[#1a53e4] rounded-[14px]">
              <button
                className="absolute top-5 left-[205px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-white text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap"
                onClick={onClick}
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>

        <div className="w-[175px] h-6">
          <p className="fixed mt-[125px] ml-48 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-transparent text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap">
            <span className="text-[#363c46] tracking-[-0.04px]">
              Not a Partner ?
            </span>
            <button className="text-[#1b53e4] tracking-[-0.04px]">Login</button>
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          className="absolute w-[726px] h-[951px] rounded-[57px] top-10 right-32"
          src={image}
        />
      </div>
    </>
  );
}
