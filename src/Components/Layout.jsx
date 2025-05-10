import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-64 min-h-screen max-w-screen">
        <div className="mt-10 md:mt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
