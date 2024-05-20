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
      // Add the new hours to the existing hours
      studyTime.hours += hours;

      // Add the new minutes to the existing minutes
      studyTime.minutes += minutes;

      // Convert total minutes to hours and minutes
      const additionalHours = Math.floor(studyTime.minutes / 60);
      studyTime.hours += additionalHours;
      studyTime.minutes = studyTime.minutes % 60;
    }

    await studyTime.save();

    res.json(studyTime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all study times and compute rank for the logged-in user
export const getUserRank = async (req, res) => {
  try {
    // Fetch all study times from the database
    const allStudyTimes = await StudyTime.find();

    // Calculate total study time for each user in minutes
    const userStudyTimes = allStudyTimes.map((user) => {
      const totalMinutes = user.hours * 60 + user.minutes;
      return { username: user.username, totalMinutes };
    });

    // Sort users by total study time in descending order
    userStudyTimes.sort((a, b) => b.totalMinutes - a.totalMinutes);

    // Find the rank of the logged-in user
    const loggedInUser = req.user.username;
    const userRank =
      userStudyTimes.findIndex((user) => user.username === loggedInUser) + 1;

    // Send the rank and the total study time of the logged-in user
    const loggedInUserStudyTime = userStudyTimes.find(
      (user) => user.username === loggedInUser
    );

    res.json({
      rank: userRank,
      totalStudyTime: loggedInUserStudyTime
        ? loggedInUserStudyTime.totalMinutes
        : 0,
      studyTimes: userStudyTimes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
