import React from "react";

const Sidebar = () => {
  return (
    <div className=" fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-md">
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
    </div>
  );
};

const SidebarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default Sidebar;
