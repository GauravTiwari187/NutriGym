import express from "express";
import { requireSignIn } from "../Middlewares/authMiddleware.js";
import { createDietPlanController, getDietPlanController } from "../controllers/dietController.js";

const router = express.Router();

// Create Diet Plan
router.post("/create-diet-plan", requireSignIn, createDietPlanController);

// Get Diet Plan
router.get("/get-diet-plan", requireSignIn, getDietPlanController);

export default router;
