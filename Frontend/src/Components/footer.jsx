import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-800 flex flex-col  items-center py-12 ">
      <h1 className="font-bold text-4xl text-slate-400 mb-7">ZuAi</h1>
      <div className="text-2xl flex gap-5  ">
        <button className="text-slate-400 hover:text-slate-200 transition-all duration-200">
          <BsFacebook />
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-all duration-200">
          <BsTwitter />
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-all duration-200">
          <BsYoutube />
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-all duration-200">
          <BsLinkedin />
        </button>
      </div>
      <h1 className="text-sm my-4 text-slate-400 ">
        ©Copyright. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
