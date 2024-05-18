import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import iconpath1 from "../assets/icons/meeting.png";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";

function Stats() {
  return (
    <div className=" flex">
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
      {/* full container */}
      <div className="text-text flex relative h-screen w-[95%] gap-10 bg-cover">
        {/* left div */}
        <div className="flex flex-wrap gap-10 w-[75%]">
          <div className="bg-slate8 flex-wrap flex justify-center items-center border mt-8 ml-10 w-[25%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className=" w-[50%] rounded-[50%] h-[40%] overflow-hidden">
              <img className=" bg-slate-200" src={iconpath1} />
            </div>
            <div className=" flex w-[60%] items-center justify-center">
              <p className=" text-xl text-text font-bold text-center  mb-6">
                name
              </p>
            </div>
          </div>
          <div className="bg-slate8 border mt-8 w-[68%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <h1 className="text-4xl text-text font-bold text-center mb-6">
              CHART
            </h1>
          </div>

          <div className="bg-slate8 gap-5 border mb-20 flex justify-center items-center ml-10 w-[60%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div>
                <img className=" ml-12 w-[50%] h-[50%]" src={iconpath1} />
              </div>
              <div>
                <h1 className=" text-text">Rank</h1>
              </div>
            </div>
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div>
                <img className=" ml-12 w-[50%] h-[50%]" src={iconpath1} />
              </div>
              <div>
                <h1 className=" text-text">Study Time</h1>
              </div>
            </div>
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div>
                <img className=" ml-12 w-[50%] h-[50%]" src={iconpath1} />
              </div>
              <div>
                <h1 className=" text-text">AVG/Day</h1>
              </div>
            </div>
          </div>
          <div className="bg-slate8 border flex flex-wrap w-[33%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="  w-[100%] h-[22%] gap-4 flex">
              <div className=" w-[20%] h-[100%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">1</h1>
              </div>
              <div className=" w-[80%] h-[100%] justify-center items-center flex text-3xl">
                <h1>Study Streak</h1>
              </div>
            </div>
            <div className=" w-[100%] h-[65%] flex gap-12 flex-wrap ml-1 mt-11">
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">2</h1>
              </div>
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">3</h1>
              </div>
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">4</h1>
              </div>
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">5</h1>
              </div>
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">6</h1>
              </div>
              <div className="  w-[20%] h-[34%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-3xl">7</h1>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}

        <div className="flex w-[25%] justify-center">
          <div className="bg-slate8 border mr-5 mt-8 mb-20 w-[100%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <h1 className="text-4xl text-text font-bold text-center mb-6">
              FRIENDS
            </h1>
          </div>
        </div>

        {/* full container */}
      </div>
    </div>
  );
}

export default Stats;
