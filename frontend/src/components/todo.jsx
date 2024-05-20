import React, { useState, useEffect } from 'react';

const GoalsWidget = ({ display }) => {
  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle adding a goal
  const handleAddGoal = () => {
    if (inputValue.trim() !== '') {
      setGoals([...goals, inputValue.trim()]);
      setInputValue('');
    }
  };

  // Function to handle removing a goal
  const handleRemoveGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <div className={`flex flex-col items-center w-[300px] h-[350px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}>
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
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-light text-dark px-4 py-2 rounded-lg my-2"
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
  );
};

export default GoalsWidget;
