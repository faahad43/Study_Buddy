import express from "express";
import {
  getOpenGoals,
  getClosedGoals,
  postOpenGoal,
  postClosedGoal,
  deleteOpenGoal,
  deleteClosedGoal,
} from "../controllers/goals.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Routes
router.get("/open", protectRoute, getOpenGoals);
router.get("/closed", protectRoute, getClosedGoals);
router.post("/open", protectRoute, postOpenGoal);
router.post("/closed", protectRoute, postClosedGoal);
router.delete("/open", protectRoute, deleteOpenGoal);
router.delete("/closed", protectRoute, deleteClosedGoal);

export default router;
