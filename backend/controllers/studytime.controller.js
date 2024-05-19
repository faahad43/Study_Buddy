import StudyTime from "../models/studytime.model.js";

// Get study time for a specific user
export const getStudyTime = async (req, res) => {
  try {
    const studyTime = await StudyTime.findOne({ username: req.user.username });
    res.json(studyTime);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update study time for a specific user
export const updateStudyTime = async (req, res) => {
  const { hours, minutes } = req.body;

  try {
    let studyTime = await StudyTime.findOne({ username: req.user.username });

    if (!studyTime) {
      studyTime = new StudyTime({
        username: req.user.username,
        hours,
        minutes,
      });
    } else {
      studyTime.hours += hours;
      studyTime.minutes += minutes;
    }

    await studyTime.save();

    res.json(studyTime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
