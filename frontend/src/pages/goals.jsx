import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";

function Stats() {
  return (
    <div className="flex">
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
    </div>
  );
}

export default Stats;
