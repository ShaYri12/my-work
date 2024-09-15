import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// DashboardLayout Component that renders the sidebar, header, and children (via Outlet)
const DashboardLayout: React.FC = () => (
  <div className="flex bg-[#F2F2FD] min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main className="lg:p-[29px] p-[16px]">
        <Outlet /> {/* This will render the matched child route component */}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
