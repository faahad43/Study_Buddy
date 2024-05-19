import express from "express";
import { getNotes, postNote } from "../controllers/notes.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Routes
router.get("/", protectRoute, getNotes);
router.post("/", protectRoute, postNote);

export default router;
