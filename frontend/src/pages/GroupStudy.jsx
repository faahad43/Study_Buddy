import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";

function GroupStudy() {
  const handleNavtoSolo = () => {
    console.log("Navigate to Solo Study page");
    // Add navigation logic here
  };

  const handleNavtoGroup = () => {
    console.log("Navigate to Study Group page");
    // Add navigation logic here
  };

  return (
    <div className="h-screen w-screen bg-secondary2 flex">
      <Sidebar />
    </div>
  );
}

export default GroupStudy;
