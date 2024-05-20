import mongoose from "mongoose";

const closedGoalSchema = new mongoose.Schema({
  username: { type: String, required: true },
  goal: { type: String, required: true },
});

const ClosedGoal = mongoose.model("ClosedGoal", closedGoalSchema);

export default ClosedGoal;
