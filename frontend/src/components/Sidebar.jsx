import React from "react";
import { GrBook } from "react-icons/gr";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import { GrFlag } from "react-icons/gr";
import { HiOutlineChat } from "react-icons/hi";
import { Link } from "react-router-dom";
import LogoutButton from "./logoutButton.jsx";

const Sidebar = () => {
  return (
    <div className="justify-center fixed top-0 h-screen">
      <div className="flex flex-col justify-center w-16 overflow-hidden text-indigo-300 bg-indigo-900 h-screen rounded items-center">
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/home"
        >
          <HiOutlineHome className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/solo"
        >
          <GrBook className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/stats"
        >
          <GrOptimize className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/goals"
        >
          <GrFlag className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/group"
        >
          <GrGroup className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/notes"
        >
          <HiMiniPencilSquare className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          to="/chat"
        >
          <HiOutlineChat className="w-6 h-6" />
        </Link>

        <Link to="/login">
          {" "}
          <LogoutButton />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
