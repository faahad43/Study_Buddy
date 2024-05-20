import express from "express";
import {
  getNotes,
  postNote,
  deleteNote,
  getNoteById,
  updateNote,
} from "../controllers/notes.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Routes
router.get("/", protectRoute, getNotes);
router.post("/", protectRoute, postNote);
router.delete("/:id", protectRoute, deleteNote);
router.get("/:id", protectRoute, getNoteById);
router.put("/:id", protectRoute, updateNote);

export default router;
