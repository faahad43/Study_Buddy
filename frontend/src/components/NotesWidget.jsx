import React, { useState } from 'react';

const NotesWidget = ({ display }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [newNote, setNewNote] = useState({ title: '', description: '' });

  // Function to handle opening the modal
  const handleOpenModal = (note = { title: '', description: '' }) => {
    setModalContent(note);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewNote({ title: '', description: '' });
  };

  // Function to handle input change for new note
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  // Function to handle adding a new note
  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.description.trim() !== '') {
      setNotes([...notes, newNote]);
      handleCloseModal();
    }
  };

  return (
    <div className={`flex flex-col items-center w-[300px] 2xl:h-[350px] h-[320px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}>
      <div className="text-3xl font-bold my-4  text-center w-full">
        Notes
      </div>
      <div className='text-xl'>
        Add a new note  <button
          onClick={() => handleOpenModal()}
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
            onClick={() => handleOpenModal(note)}
          >
            <div>{note.title}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-lightdark p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <div className="text-light text-2xl">Add Note</div>
              <button onClick={handleCloseModal} className="text-light text-xl">&times;</button>
            </div>
            <div className="mb-4">
              <label className="block text-light mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={newNote.title || modalContent.title}
                onChange={handleInputChange}
                className="bg-light px-4 py-2 rounded-lg text-dark w-full"
                disabled={!!modalContent.title && !!modalContent.description}
              />
            </div>
            <div className="mb-4">
              <label className="block text-light mb-2">Description</label>
              <textarea
                name="description"
                value={newNote.description || modalContent.description}
                onChange={handleInputChange}
                className="bg-light px-4 py-2 rounded-lg text-dark w-full"
                disabled={!!modalContent.title && !!modalContent.description}
              ></textarea>
            </div>
            {(!modalContent.title || !modalContent.description) ? (
              <button
                onClick={handleAddNote}
                className="bg-green-500 text-light px-4 py-2 rounded-lg"
              >
                Add Note
              </button>
            ) : (
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-light px-4 py-2 rounded-lg"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesWidget;
