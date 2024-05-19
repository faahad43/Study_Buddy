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
