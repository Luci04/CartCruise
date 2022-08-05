import express from "express";

const router = express.Router();

import {
  authUser,
  getuserProfile,
  registerUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);

router.post("/login", authUser);

//protect is Middleware
router.route("/profile").get(protect, getuserProfile);

export default router;
