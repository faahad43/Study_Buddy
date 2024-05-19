import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { PiRanking } from "react-icons/pi";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GrTrophy } from "react-icons/gr";

const goals = ({ display }) => {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddGoal = () => {
    if (inputValue.trim() !== "") {
      setGoals([...goals, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };
  return (
    <div className=" flex">
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
      <div
        className={`text-text relative flex h-screen w-[95%] justify-center items-center bg-cover ${display}`}
      >
        <div className=" flex w-[60%] h-[100%]  items-center p-4 text-light rounded-lg opacity-90">
          <div className="bg-slate8 flex-wrap flex justify-center items-center border   w-[100%] h-[100%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="text-3xl font-bold  w-[100%] flex justify-center items-center">
              <h1>What do You want to achieve?</h1>
            </div>
            <div className="flex justify-center items-center space-x-4 w-[100%] h-[20%]">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your goal"
                className="bg-light px-4 py-2 rounded-lg text-dark w-[70%] h-[45%] text-xl"
              />
              <button
                onClick={handleAddGoal}
                className="bg-mediumdark text-light text-5xl px-4 py-2 rounded-lg"
              >
                +
              </button>
            </div>
            <div className="mt-4 w-[80%] h-[75%] overflow-y-auto ">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-light text-dark px-4 py-2 rounded-lg my-2 text-xl"
                >
                  <div>{goal}</div>
                  <button
                    onClick={() => handleRemoveGoal(index)}
                    className="text-red-500"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex w-[40%] h-[100%]  items-center p-4 text-light rounded-lg opacity-90">
          <div className="bg-slate8 flex-wrap gap-4 flex  border w-[100%] h-[100%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="bg-slate8 flex-wrap flex justify-center items-center border w-[100%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
              <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
                <div className=" w-[50%] h-[30%]">
                  <MdRadioButtonUnchecked className=" w-[100%] h-[100%]" />
                </div>
                <div className=" w-[60%] h-[20%]  flex justify-center items-center">
                  <h1 className=" text-text text-xl">Open goals</h1>
                </div>
                <div className=" w-[60%] h-[20%] flex justify-center items-center">
                  <h1 className=" text-text text-2xl">3</h1>
                </div>
              </div>
              <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
                <div className=" w-[50%] h-[30%]">
                  <IoCheckmarkDoneCircleSharp className=" w-[100%] h-[100%]" />
                </div>
                <div className=" w-[60%] h-[20%]  flex justify-center items-center">
                  <h1 className=" text-text text-xl">closed goals</h1>
                </div>
                <div className=" w-[60%] h-[20%] flex justify-center items-center">
                  <h1 className=" text-text text-2xl">8</h1>
                </div>
              </div>
            </div>
            <div className="bg-slate8 flex-wrap flex justify-center items-center border w-[100%] h-[60%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
              <div className="text-3xl font-bold h-[20%] w-[100%] flex justify-center items-center">
                <div className="text-3xl font-bold w-[30%] h-full flex justify-center items-center">
                  <GrTrophy className=" w-[70%] h-[70%] ml-16" />
                </div>
                <div className="text-3xl font-bold w-[70%] h-full justify-center items-center mr-10 flex">
                  <h1 className=" pr-12">Achievements</h1>
                </div>
              </div>

              <div className="mt-4 w-[80%] h-[75%] overflow-y-auto  ">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-light text-dark px-4 py-2 rounded-lg my-2 text-xl"
                  >
                    <div>{goal}</div>
                    <button
                      onClick={() => handleRemoveGoal(index)}
                      className="text-red-500"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default goals;
