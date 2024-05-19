import mongoose from "mongoose";

const studyTimeSchema = new mongoose.Schema({
  username: { type: String, required: true },
  hours: { type: Number, default: 0 },
  minutes: { type: Number, default: 0 },
});

const StudyTime = mongoose.model("StudyTime", studyTimeSchema);

export default StudyTime;
