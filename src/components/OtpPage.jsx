import React from "react";
import titleLogo from "../assets/title-logo.png";
import image from "../assets/page-img.png";

export default function OtpPage({ onClick }) {
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
            Verify OTP
          </div>
        </div>

        <div className="relative w-[500px] h-[19px]">
          <p className="fixed w-[500px] mt-12 ml-10 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-[#363c46] text-base tracking-[-0.16px] leading-[normal]">
            We have sent you a OTP in your number, Please check and enter OTP
          </p>
        </div>

        <div className="relative w-[496px] h-[102px]">
          <div className="fixed w-[498px] h-[102px] mt-[80px] ml-10">
            <label className="absolute [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#8b97a2] text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap">
              Enter OTP
            </label>

            <div className="left-0 absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>

            <div className="left-[86px] absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>

            <div className="left-[173px] absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>

            <div className="left-[259px] absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>

            <div className="left-[345px] absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>

            <div className="left-[432px] absolute w-16 h-16 top-[38px] bg-[#ebeff4] rounded-[10px]">
              <input
                type="number"
                className="left-0 w-16 absolute top-5 [font-family:'SF_Pro_Display-Medium',Helvetica] bg-[#ebeff4] font-medium text-black text-xl text-center outline-none tracking-[-0.20px] leading-[normal] whitespace-nowrap"
              />
            </div>
          </div>
        </div>

        <div className="w-[238px] h-16">
          <div className="fixed w-60 h-16">
            <div className="relative w-[238px] h-16 mt-[110px] ml-10 rounded-[14px] border border-solid border-[#1b53e4]">
              <button
                className="absolute top-[19px] left-[89px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#1b53e4] text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap"
                onClick={onClick}
              >
                Back
              </button>
            </div>
          </div>

          <div className="fixed w-60 h-16">
            <div className="relative w-[238px] h-16 ml-[300px] mt-[110px] bg-[#1b53e4] rounded-[14px]">
              <button className="absolute top-[19px] left-[87px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-white text-xl text-center tracking-[-0.20px] leading-[normal] whitespace-nowrap">
                Verify
              </button>
            </div>
          </div>
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
