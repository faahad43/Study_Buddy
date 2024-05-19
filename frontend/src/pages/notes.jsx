import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { PiRanking } from "react-icons/pi";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GrTrophy } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";

const Notes = ({ display }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSave = () => {
    if (title.trim() && note.trim()) {
      setSavedNotes([
        ...savedNotes,
        { title, note, date: new Date().toLocaleString() },
      ]);
      setTitle("");
      setNote("");
    }
  };

  const handleAddGoal = () => {
    if (inputValue.trim() !== "") {
      setGoals([...goals, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...savedNotes];
    updatedNotes.splice(index, 1);
    setSavedNotes(updatedNotes);
  };

  const handleRemoveGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="flex">
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
      <div
        className={`text-text relative flex h-screen w-[95%] justify-center items-center bg-cover ${display}`}
      >
        <div className="flex w-[60%] h-[100%] items-center p-4 text-light rounded-lg opacity-90">
          <div className="bg-slate8 flex flex-wrap flex border w-[100%] h-[100%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <div className="w-full ">
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
                className="w-full mb-4 p-2 rounded bg-slate-200 text-black"
              />

              <div className="flex justify-between items-center mb-4">
                <div>
                  <button className="p-2 bg-blue-500 text-white rounded mr-2">
                    B
                  </button>
                  <button className="p-2 bg-blue-500 text-white rounded mr-2">
                    I
                  </button>
                  <button className="p-2 bg-blue-500 text-white rounded">
                    U
                  </button>
                </div>
                <button
                  onClick={handleSave}
                  className="flex items-center bg-green-500 text-white p-2 rounded-full shadow hover:bg-green-600"
                >
                  <FaPlus className="mr-2" /> Note
                </button>
              </div>
              <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Write your note here..."
                className="w-full h-[85%] mb-4 p-2 rounded overflow-hidden bg-slate-100 text-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex w-[40%] h-[100%] items-center p-4 text-light rounded-lg opacity-90">
          <div className="bg-slate8 flex-wrap flex justify-center items-center overflow-hidden border w-[100%] h-[100%] border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <ul className="w-full h-[100%] overflow-y-auto">
              {savedNotes.map((note, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded mb-2 shadow-md relative"
                >
                  <button
                    onClick={() => handleDeleteNote(index)}
                    className="absolute top-2 right-2 text-red-500 focus:outline-none"
                  >
                    X
                  </button>
                  <h3 className="font-bold text-black">{note.title}</h3>
                  <p className="text-black">{note.note}</p>
                  <span className="text-sm text-gray-500">{note.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
