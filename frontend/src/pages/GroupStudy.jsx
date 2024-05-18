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
    <div className="flex">
      <div className="w-[5%] h-screen bg-primary">
          <Sidebar />
        </div>
        <div className="h-screen w-[95%] bg-secondary2 flex">
        </div>
    </div>
    
  );
}

export default GroupStudy;
