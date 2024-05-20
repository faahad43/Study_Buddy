import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext.jsx"; // Assuming you have an AuthContext

const Timer = ({ display }) => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(10);
  const [timeLeft, setTimeLeft] = useState(workTime * 60); // Time left in seconds
  const [timerRunning, setTimerRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
  const { authUser } = useAuthContext();

  // Function to format time from seconds to MM:SS format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Function to handle timer toggle
  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  // Function to handle timer reset
  const resetTimer = async () => {
    setTimeLeft(workTime * 60);
    setTimerRunning(false);
    setIsWorkTime(true);
    if (elapsedTime > 0) {
      await postElapsedTime();
      setElapsedTime(0);
    }
  };

  // Function to post elapsed time to backend
  const postElapsedTime = async () => {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    try {
      const response = await fetch("/api/study-time", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
        body: JSON.stringify({ hours, minutes }),
      });
      if (!response.ok) {
        throw new Error("Failed to post elapsed time");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            // Switch between work and break time
            if (isWorkTime) {
              setTimeLeft(breakTime * 60);
              setIsWorkTime(false);
            } else {
              setTimeLeft(workTime * 60);
              setIsWorkTime(true);
            }
            return prevTimeLeft;
          }
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerRunning, workTime, breakTime, isWorkTime]);

  return (
    <div
      className={`flex flex-col items-center w-[300px] 2xl:h-[320px] h-[270px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}
    >
      <div className="text-3xl font-bold my-0 2xl:my-4">
        {isWorkTime ? "Work Time" : "Break Time"}
      </div>
      <div className="text-3xl font-bold my-2">{formatTime(timeLeft)}</div>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => setWorkTime((prev) => prev + 5)}
          className="bg-mediumdark text-light px-4 py-2 rounded-lg"
        >
          +
        </button>
        <div>{workTime} min Work</div>
        <button
          onClick={() => setWorkTime((prev) => Math.max(5, prev - 5))}
          className="bg-mediumdark text-light px-4 py-2 rounded-lg"
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          onClick={() => setBreakTime((prev) => prev + 5)}
          className="bg-mediumdark text-light px-4 py-2 rounded-lg"
        >
          +
        </button>
        <div>{breakTime} min Break</div>
        <button
          onClick={() => setBreakTime((prev) => Math.max(5, prev - 5))}
          className="bg-mediumdark text-light px-4 py-2 rounded-lg"
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          onClick={toggleTimer}
          className={`${
            timerRunning ? "bg-red-500" : "bg-success"
          } text-light px-4 py-2 rounded-lg`}
        >
          {timerRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-secondary text-light px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
