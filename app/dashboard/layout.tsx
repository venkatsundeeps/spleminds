import React from "react";
import Sidebar from "./_components/sidebar";
import UserSidebar from "./_components/user-sidebar";
import Header from "./_components/Header";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow flex items-center justify-center ml-32 -mt-16">
          {children}
        </main>
      </div>
      <footer>{/* Insert footer content here */}</footer>
    </div>
  );
};

export default DashboardLayout;
