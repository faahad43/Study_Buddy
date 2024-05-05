import React, { useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavToSolo = () => {
    // Navigate to the '/solo' route
    navigate("/solo");
  };
  const handleNavToGroup = () => {
    navigate("/group");
    // Add navigation logic here
  };

  return (
    <div className="h-screen w-screen bg-background_default flex">
      <div className="h-screen w-1/2 bg-secondary2 flex flex-1 items-center justify-center">
        <div
          className="h-1/3 w-1/2 bg-secondary rounded-lg flex items-center justify-center hover:scale-105 delay-75"
          onClick={handleNavToSolo}
        >
          <h1 className="text-text text-4xl">Start Studying Solo</h1>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-secondary flex flex-1 items-center justify-center">
        <div
          className="w-1/2 h-1/3 bg-secondary2 rounded-lg flex items-center justify-center hover:scale-105 delay-75"
          onClick={handleNavToGroup}
        >
          <h1 className="text-text text-4xl">Start a Study Group</h1>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
