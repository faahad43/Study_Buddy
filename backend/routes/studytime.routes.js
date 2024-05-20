import express from "express";
import {
  getStudyTime,
  updateStudyTime,
  getUserRank,
} from "../controllers/studytime.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getStudyTime);
router.post("/", protectRoute, updateStudyTime);
router.get("/rank", protectRoute, getUserRank);

export default router;
