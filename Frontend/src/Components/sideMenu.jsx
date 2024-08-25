import React from "react";
import { BsHouse, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex flex-col h-full gap-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "text-white bg-violet-700"
              : "text-slate-800 bg-white hover:bg-slate-100"
          } flex items-center justify-start rounded-lg p-2 text-2xl`
        }
      >
        <BsHouse />
      </NavLink>
      <NavLink
        to="/add-blog"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "text-white bg-violet-700"
              : "text-slate-800 bg-white hover:bg-slate-100"
          } flex items-center justify-start rounded-xl p-2 text-2xl `
        }
      >
        <BsPlusCircle />
      </NavLink>
    
    </div>
  );
};

export default SideMenu;
