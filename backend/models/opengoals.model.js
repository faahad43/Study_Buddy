import mongoose from "mongoose";

const openGoalSchema = new mongoose.Schema({
  username: { type: String, required: true },
  goal: { type: String, required: true },
});

const OpenGoal = mongoose.model("OpenGoal", openGoalSchema);

export default OpenGoal;
