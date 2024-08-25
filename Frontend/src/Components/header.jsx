import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-3 sm:px-7 py-3 w-full">
      <h1 className="font-bold text-3xl text-slate-900 ">ZuAi</h1>
      <div className="flex gap-2 sm:gap-3 ">
        <button className=" rounded-3xl text-sm sm:text-lg px-2 sm:px-5 border border-slate-400 text-slate-500 hover:bg-slate-100  font-medium transition-all duration-200">Login</button>
        <button className="rounded-3xl bg-violet-700 text-white text-sm sm:text-lg px-2 sm:px-5 font-medium hover:bg-violet-600 transition-all duration-200">Join Now</button>
      </div>
    </div>
  );
};

export default Header;
