import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";

function SoloStudy() {
  const handleNavtoSolo = () => {
    console.log("Navigate to Solo Study page");
    // Add navigation logic here
  };

  const handleNavtoGroup = () => {
    console.log("Navigate to Study Group page");
    // Add navigation logic here
  };

  return (
    <div className="h-screen w-screen bg-background_default flex">
      <Sidebar />
    </div>
  );
}

export default SoloStudy;
