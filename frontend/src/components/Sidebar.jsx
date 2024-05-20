import React from "react";
import { GrBook } from "react-icons/gr";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import { GrTrophy } from "react-icons/gr";
import { HiOutlineChat } from "react-icons/hi";
import LogoutButton from './logoutButton.jsx'

const sidebar = () => {
  return (
    <div className=" justify-center fixed top-0 ">
      <div class="flex flex-col justify-center w-16 overflow-hidden text-indigo-300 bg-indigo-900 rounded h-screen items-center">
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <HiOutlineHome className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <GrBook className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <GrOptimize className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <GrTrophy className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <GrGroup className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <HiMiniPencilSquare className="w-6 h-6" />
        </a>
        <a
          class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
          <HiOutlineChat className="w-6 h-6" />
        </a>
      </div>

      
     
      
      <LogoutButton/>
    </div>
  );
};

// const SidebarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default sidebar;
