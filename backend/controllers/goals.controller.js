import OpenGoal from "../models/opengoals.model.js";
import ClosedGoal from "../models/closedgoals.model.js";

// Get all open goals for a specific user
export const getOpenGoals = async (req, res) => {
  try {
    const openGoals = await OpenGoal.find({ username: req.user.username });
    res.json(openGoals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all closed goals for a specific user
export const getClosedGoals = async (req, res) => {
  try {
    const closedGoals = await ClosedGoal.find({ username: req.user.username });
    res.json(closedGoals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post a new open goal
export const postOpenGoal = async (req, res) => {
  try {
    console.log("Received request to add goal:", req.body);
    const { goal } = req.body;
    const newOpenGoal = new OpenGoal({
      username: req.user.username,
      goal,
    });
    const savedOpenGoal = await newOpenGoal.save();
    res.status(201).json(savedOpenGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Post a new closed goal
export const postClosedGoal = async (req, res) => {
  try {
    const { goal } = req.body;
    const newClosedGoal = new ClosedGoal({
      username: req.user.username,
      goal,
    });
    const savedClosedGoal = await newClosedGoal.save();
    res.status(201).json(savedClosedGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOpenGoal = async (req, res) => {
  try {
    console.log("onga bonga");
    const { goalId } = req.body;
    const deletedGoal = await OpenGoal.findByIdAndDelete(goalId);
    if (!deletedGoal) {
      return res.status(404).json({ message: "Open goal not found" });
    }
    res.json(deletedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a closed goal
export const deleteClosedGoal = async (req, res) => {
  try {
    const { goalId } = req.body;
    const deletedGoal = await ClosedGoal.findByIdAndDelete(goalId);
    if (!deletedGoal) {
      return res.status(404).json({ message: "Closed goal not found" });
    }
    res.json(deletedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
