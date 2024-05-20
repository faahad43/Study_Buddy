import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import iconpath1 from "../assets/icons/meeting.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiRanking } from "react-icons/pi";
import { IoIosBookmarks } from "react-icons/io";
import { TbAlarmAverage } from "react-icons/tb";
import { Bar } from "react-chartjs-2"; // Import Bar from react-chartjs-2
import { useAuthContext } from "../context/AuthContext.jsx";
import Conversations from "../components/conversations.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Stats() {
  const data = {
    labels: ["mon", "tues", "weds", "weds", "fri", "sat", "sun"],
    datasets: [
      {
        label: "days",
        backgroundColor: "rgba())",
        borderColor: "#2374a6",
        borderWidth: 1,

        hoverBackgroundColor: "#2374a6",
        hoverBorderColor: "#2374a6",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white", // Set legend label text color to white
        },
        position: "bottom",
      },
      title: {
        display: true,
        color: "white", // Set title text color to white
        text: "Avg StudyTime",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Set x-axis label text color to white
        },
      },
      y: {
        ticks: {
          color: "white", // Set y-axis label text color to white
        },
      },
    },
  };

  // useEffect hook to fetch study time and user rank data
  useEffect(() => {
    fetchStudyTime();
    fetchUserRank();
    fetchUsername();
  }, []);

  // Function to fetch study time data from the API
  const fetchStudyTime = async () => {
    try {
      const response = await fetch("/api/study-time", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setStudyTime(data);
      } else {
        throw new Error("Failed to fetch study time");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Function to fetch user rank data from the API
  const fetchUserRank = async () => {
    try {
      const response = await fetch("/api/study-time/rank", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserRank(data);
      } else {
        throw new Error("Failed to fetch user rank");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUsername = async () => {
    try {
      // Extract first name, last name, and profile pic from authUser
      const { firstname, lastname, profilePic } = authUser;

      // Combine first name and last name to form the full name
      const fullName = `${firstname} ${lastname}`;

      // Set the full name and profile pic in the state
      setName(fullName);
      setProfilePic(profilePic); // Assuming you have a state variable named 'profilePic'
    } catch (error) {
      console.error(error.message);
    }
  };

  // Function to calculate average study time per day
  const calculateAvgStudyTimePerDay = () => {
    const totalStudyTimeInMinutes = studyTime.hours * 60 + studyTime.minutes;
    const avgStudyTimePerDay = totalStudyTimeInMinutes / 7; // Assuming 7 days a week
    return avgStudyTimePerDay.toFixed(2); // Round to 2 decimal places
  };

  const [studyTime, setStudyTime] = useState({ hours: 0, minutes: 0 });
  const [userRank, setUserRank] = useState(null);
  const [name, setName] = useState(null);
  const [profilepic, setProfilePic] = useState(null); // State to hold the username
  const { authUser } = useAuthContext();
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
            <div className=" w-[50%] rounded-[50%] h-[40%] ">
              <IoPersonCircleOutline
                className="w-[100%]  h-[100%] "
                src={profilepic}
              />
            </div>
            <div className=" flex w-[60%] items-center justify-center">
              <p className=" text-xl text-text font-bold text-center  mb-6">
                {name ? name : "Loading..."}
              </p>
            </div>
          </div>

          <div className="bg-slate8 border mt-8 w-[68%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="relative w-[100%] h-[100%]">
              <Bar
                data={data}
                options={options}
                className="absolute top-0 left-0 w-[100%] h-full"
              />
            </div>
          </div>
          <div className="bg-slate8 gap-5 border mb-20 flex justify-center items-center ml-10 w-[60%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div className=" w-[50%] h-[50%]">
                <PiRanking className=" w-[100%] h-[100%]" />
              </div>
              <div className=" w-[60%] h-[60%] flex justify-center items-center">
                <h1 className=" text-text text-2xl">
                  {" "}
                  Rank: {userRank ? userRank.rank : "-"}
                </h1>
              </div>
            </div>
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div className=" w-[50%] h-[50%]">
                <IoIosBookmarks className=" w-[100%] h-[100%]" />
              </div>
              <div className=" w-[60%] h-[60%] flex flex-wrap ml-5 justify-center items-center">
                <h1 className="text-text text-xl w-[100%]"> Study Time:</h1>
                <h1 className="text-text text-xl w-[100%]">
                  {" "}
                  {studyTime
                    ? `${studyTime.hours} hrs ${studyTime.minutes} mins`
                    : "-"}
                </h1>
              </div>
            </div>
            <div className=" w-[50%] h-[90%] flex flex-wrap justify-center items-center">
              <div className=" w-[50%] h-[50%]">
                <TbAlarmAverage className=" w-[100%] h-[100%]" />
              </div>
              <div className=" w-[60%] h-[60%] ml-12 flex flex-wrap justify-center items-center">
                <h1 className="text-text text-xl justify-center w-[100%]">
                  {" "}
                  Avg/Day
                </h1>
                <h1 className="text-text text-xl w-[100%]">
                  {calculateAvgStudyTimePerDay()} mins
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-slate8 border flex flex-wrap w-[33%] h-[40%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="  w-[100%] h-[22%] gap-4 flex">
              <div className=" w-[20%] h-[100%] rounded-[50%] flex justify-center items-center bg-slate-800">
                <h1 className=" text-sky-100 text-2xl">1</h1>
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
            <div>
              <Conversations />
            </div>
          </div>
        </div>

        {/* full container */}
      </div>
    </div>
  );
}

export default Stats;
