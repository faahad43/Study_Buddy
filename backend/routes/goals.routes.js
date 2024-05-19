import express from "express";
import {
  getOpenGoalsAndNumber,
  getClosedGoalsAndNumber,
  postOpenGoal,
  postClosedGoal,
  deleteOpenGoal,
  deleteClosedGoal,
} from "../controllers/goals.constroller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Routes
router.get("/open", protectRoute, getOpenGoalsAndNumber);
router.get("/closed", protectRoute, getClosedGoalsAndNumber);
router.post("/open", protectRoute, postOpenGoal);
router.post("/closed", protectRoute, postClosedGoal);
router.delete("/open", protectRoute, deleteOpenGoal);
router.delete("/closed", protectRoute, deleteClosedGoal);

export default router;
