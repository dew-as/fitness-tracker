import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Set up multer with memory storage

router.post("/signup", upload.single("img"), UserRegister); // Add upload.single to handle image upload
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

export default router;
