import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import SideMenu from "./sideMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <div className="p-3">
          <SideMenu />
        </div>
        <div className="min-h-screen bg-slate-200 w-full  rounded-tl-lg">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
