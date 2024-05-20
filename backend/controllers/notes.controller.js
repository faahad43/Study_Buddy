import Note from "../models/notes.model.js";

// Get all notes for a specific user
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ username: req.user.username });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
export const postNote = async (req, res) => {
  const { title, note } = req.body;

  const newNote = new Note({
    title,
    note,
    username: req.user.username,
  });

  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a note by ID
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

// Get a note by ID
export const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error fetching note" });
  }
};

// Update a note by ID
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, note },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: "Error updating note" });
  }
};
