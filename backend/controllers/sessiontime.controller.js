import Session from "../models/sessiontime.model.js";

// Get session time for a specific user
export const getSessionTime = async (req, res) => {
  try {
    const userId = req.user._id;
    const sessions = await Session.find({ userId });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add session time for a specific user
export const addSessionTime = async (req, res) => {
  const { startTime, endTime } = req.body;
  const userId = req.user._id;

  try {
    const session = new Session({ userId, startTime, endTime });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
