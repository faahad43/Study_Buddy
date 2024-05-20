import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { FaPlus } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const Notes = ({ display }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setSavedNotes(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);

  const handleSave = async () => {
    if (title.trim() && note.trim()) {
      try {
        let res, data;
        if (currentNoteId) {
          // Update existing note
          res = await fetch(`/api/notes/${currentNoteId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authUser.token}`,
            },
            body: JSON.stringify({ title, note }),
          });
        } else {
          // Create new note
          res = await fetch("/api/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authUser.token}`,
            },
            body: JSON.stringify({ title, note }),
          });
        }

        data = await res.json();
        if (res.ok) {
          if (currentNoteId) {
            setSavedNotes(
              savedNotes.map((n) => (n._id === currentNoteId ? data : n))
            );
            toast.success("Note updated successfully");
          } else {
            setSavedNotes([...savedNotes, data]);
            toast.success("Note added successfully");
          }
          setTitle("");
          setNote("");
          setCurrentNoteId(null);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setSavedNotes(savedNotes.filter((note) => note._id !== id));
        toast.success(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleNoteClick = (note) => {
    setCurrentNoteId(note._id);
    setTitle(note.title);
    setNote(note.note);
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
                  <FaPlus className="mr-2" /> {currentNoteId ? "Update" : "Add"}{" "}
                  Note
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
                  className="bg-white p-4 rounded mb-2 shadow-md relative hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNoteClick(note)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNote(note._id);
                    }}
                    className="absolute top-2 right-2 text-red-500 focus:outline-none"
                  >
                    X
                  </button>
                  <h3 className="font-bold text-black">{note.title}</h3>
                  <p className="text-black">{note.note}</p>
                  <span className="text-sm text-gray-500">
                    {new Date(note.time).toLocaleString()}
                  </span>
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
