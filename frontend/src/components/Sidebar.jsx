import React from "react";
import iconpath1 from "../assets/icons/meeting.png";
import iconpath2 from "../assets/icons/stats.png";
import iconpath3 from "../assets/icons/messages.png";
import iconpath4 from "../assets/icons/flag.png";
import iconpath5 from "../assets/icons/e-learning.png";
import iconpath6 from "../assets/icons/memo-pad.png";
import LogoutButton from './logoutButton.jsx'

const sidebar = () => {
  return (
    <div className="  flex-1 fixed top-0 left-0 gap-3 h-screen w-16 m-0 flex flex-col bg-primary text-text items-center">
      <div className=" mt-4">
        <img className=" w-8 h-8 " src={iconpath5} alt="Iconalt" />
        {"Solo"}
      </div>

      <div>
        <img className=" w-8 h-8" src={iconpath2} alt="Iconalt" />
        {"Stats"}
      </div>
      <div>
        <img className=" w-8 h-8" src={iconpath4} alt="Iconalt" />
        {"Goals"}
      </div>
      <div>
        <img className=" w-8 h-8" src={iconpath3} alt="Iconalt" />
        {"Chats"}
      </div>

      <div>
        <img className=" w-8 h-8" src={iconpath6} alt="Iconalt" />
        {"Notes"}
      </div>
      <div>
        <img className=" w-8 h-8" src={iconpath1} alt="Iconalt" />
        {"Group"}
      </div>
      <LogoutButton/>
    </div>
  );
};

// const SidebarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default sidebar;
