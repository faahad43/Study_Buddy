import User from "../models/user.model.js";

export const getUserForSiderbar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in  getUserForSiderbar", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsername = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("username");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ username: user.username });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
