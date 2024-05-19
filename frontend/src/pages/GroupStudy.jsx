import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GroupStudy = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="bg-cover h-[100vh] flex justify-center items-center">
      <div className="flex bg-slate8 border h-[20vh] w-[50vh] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Room Code"
          />
          <label class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-blue-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:after:scale-x-100 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
            Enter Room Code
          </label>
        </div>
        
        <div className="">
          <button
            class="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleJoinRoom}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupStudy;
