import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSiderbar } from "../controllers/user.controller.js";
import { getUsername } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSiderbar);
router.get("/username/:id", protectRoute, getUsername);

export default router;
