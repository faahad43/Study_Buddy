import express from "express";
import {
  getSessionTime,
  addSessionTime,
} from "../controllers/sessiontime.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getSessionTime);
router.post("/", protectRoute, addSessionTime);

export default router;
