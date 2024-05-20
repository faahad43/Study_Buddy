import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const GoalsWidget = ({ display }) => {
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

  const handleRemoveGoal = async (id, type) => {
    try {
      const endpoint =
        type === "open" ? `/api/goals/open` : `/api/goals/closed/${id}`;
      const method = "DELETE";
      const body = type === "open" ? JSON.stringify({ goalId: id }) : null;
      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
        body,
      });
      const data = await res.json();
      if (res.ok) {
        if (type === "open") {
          setOpenGoals(openGoals.filter((goal) => goal._id !== id));
        } else {
          setClosedGoals(closedGoals.filter((goal) => goal._id !== id));
        }
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
        handleRemoveGoal(id, "open");
        toast.success("Goal moved to closed successfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex flex-col items-center w-[300px] h-[350px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}
    >
      <div className="text-3xl font-bold my-4">Goals</div>
      <div className="flex justify-center items-center space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your goal"
          className="bg-light px-4 py-2 rounded-lg text-dark"
        />
        <button
          onClick={handleAddGoal}
          className="bg-mediumdark text-light px-4 py-2 rounded-lg"
        >
          +
        </button>
      </div>
      <div className="mt-4 w-full h-40 overflow-y-auto">
        {openGoals.map((goal, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-light text-dark px-4 py-2 rounded-lg my-2"
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
                onClick={() => handleRemoveGoal(goal._id, "open")}
                className="text-red-500"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsWidget;
