import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { GrTrophy } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const Goals = ({ display }) => {
  const [inputValue, setInputValue] = useState("");
  const [openGoals, setOpenGoals] = useState([]);
  const [closedGoals, setClosedGoals] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const openRes = await fetch("/api/goals/open", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      const openData = await openRes.json();
      console.log("Open goals data:", openData);
      if (openRes.ok) {
        setOpenGoals(openData);
      } else {
        throw new Error(openData.message);
      }

      const closedRes = await fetch("/api/goals/closed", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      const closedData = await closedRes.json();
      console.log("Closed goals data:", closedData);
      if (closedRes.ok) {
        setClosedGoals(closedData);
      } else {
        throw new Error(closedData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddGoal = async () => {
    if (inputValue.trim() !== "") {
      try {
        const res = await fetch("/api/goals/open", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.token}`,
          },
          body: JSON.stringify({ goal: inputValue.trim() }),
        });
        const data = await res.json();
        if (res.ok) {
          setOpenGoals([...openGoals, data]);
          setInputValue("");
          toast.success("Goal added successfully");
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleRemoveOpenGoal = async (id) => {
    try {
      const res = await fetch(`/api/goals/open`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
        body: JSON.stringify({ goalId: id }), // Pass goalId in the request body
      });
      const data = await res.json();
      if (res.ok) {
        setOpenGoals(openGoals.filter((goal) => goal._id !== id));
        toast.success(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRemoveClosedGoal = async (id) => {
    try {
      const res = await fetch(`/api/goals/closed/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setClosedGoals(closedGoals.filter((goal) => goal._id !== id));
        toast.success(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleMoveToClosed = async (id, goal) => {
    try {
      const res = await fetch("/api/goals/closed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
        body: JSON.stringify({ goal }),
      });
      const data = await res.json();
      if (res.ok) {
        setClosedGoals([...closedGoals, data]);
        handleRemoveOpenGoal(id); // Updated function call to correct function
        toast.success("Goal moved to closed successfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" flex">
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
      <div
        className={`text-text relative flex h-screen w-[95%] justify-center items-center bg-cover ${display}`}
      >
        {/* Add Goal Section */}
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
              <ul className="w-full h-[100%] overflow-y-auto">
                {openGoals.map((goal, index) => (
                  <li
                    key={index}
                    className="bg-light text-dark px-4 py-2 rounded-lg my-2 text-xl flex justify-between items-center"
                  >
                    <div>{goal.goal}</div>
                    <div>
                      <button
                        onClick={() => handleMoveToClosed(goal._id, goal.goal)}
                        className="text-green-500 mr-2"
                      >
                        <IoCheckmarkDoneCircleSharp />
                      </button>
                      <button
                        onClick={() => handleRemoveOpenGoal(goal._id)}
                        className="text-red-500"
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
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
                  <h1 className=" text-text text-2xl">{openGoals.length}</h1>
                </div>
              </div>
              <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
                <div className=" w-[50%] h-[30%]">
                  <IoCheckmarkDoneCircleSharp className=" w-[100%] h-[100%]" />
                </div>
                <div className=" w-[60%] h-[20%]  flex justify-center items-center">
                  <h1 className=" text-text text-xl">Closed goals</h1>
                </div>
                <div className=" w-[60%] h-[20%] flex justify-center items-center">
                  <h1 className=" text-text text-2xl">{closedGoals.length}</h1>
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
                <ul className="w-full h-[100%] overflow-y-auto">
                  {closedGoals.map((goal, index) => (
                    <li
                      key={index}
                      className="bg-light text-dark px-4 py-2 rounded-lg my-2 text-xl flex justify-between items-center"
                    >
                      <div>{goal.goal}</div>
                      <button
                        onClick={() => handleRemoveClosedGoal(goal._id)}
                        className="text-red-500"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
