import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const NotesWidget = ({ display }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    note: "",
  });
  const [newNote, setNewNote] = useState({ title: "", note: "" });
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
        setNotes(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const handleAddOrUpdateNote = async () => {
    if (newNote.title.trim() && newNote.note.trim()) {
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
            body: JSON.stringify(newNote),
          });
        } else {
          // Create new note
          res = await fetch("/api/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authUser.token}`,
            },
            body: JSON.stringify(newNote),
          });
        }

        data = await res.json();
        if (res.ok) {
          if (currentNoteId) {
            setNotes(notes.map((n) => (n._id === currentNoteId ? data : n)));
            toast.success("Note updated successfully");
          } else {
            setNotes([...notes, data]);
            toast.success("Note added successfully");
          }
          handleCloseModal();
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
        setNotes(notes.filter((note) => note._id !== id));
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
    setModalContent({ title: note.title, note: note.note });
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    setModalContent({ title: "", note: "" });
    setCurrentNoteId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewNote({ title: "", note: "" });
    setCurrentNoteId(null);
  };

  return (
    <div
      className={`flex flex-col items-center w-[300px] 2xl:h-[350px] h-[320px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}
    >
      <div className="text-3xl font-bold my-4  text-center w-full">Notes</div>
      <div className="text-xl">
        Add a new note{" "}
        <button
          onClick={handleOpenModal}
          className="bg-mediumdark text-light px-4 ml-1 py-2 rounded-lg"
        >
          +
        </button>
      </div>
      <div className="mt-4 w-full h-40 overflow-y-auto">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-light text-dark px-4 py-2 rounded-lg my-2 cursor-pointer"
            onClick={() => handleNoteClick(note)}
          >
            <div>{note.title}</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteNote(note._id);
              }}
              className="text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-lightdark p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <div className="text-light text-2xl">
                {currentNoteId ? "Update Note" : "Add Note"}
              </div>
              <button onClick={handleCloseModal} className="text-light text-xl">
                &times;
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-light mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={newNote.title}
                onChange={handleInputChange}
                className="bg-light px-4 py-2 rounded-lg text-dark w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-light mb-2">Note</label>
              <textarea
                name="note"
                value={newNote.note}
                onChange={handleInputChange}
                className="bg-light px-4 py-2 rounded-lg text-dark w-full"
              ></textarea>
            </div>
            <button
              onClick={handleAddOrUpdateNote}
              className="bg-green-500 text-light px-4 py-2 rounded-lg"
            >
              {currentNoteId ? "Update Note" : "Add Note"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesWidget;
