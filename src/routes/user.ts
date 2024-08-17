import express from "express";
import {
  getProfile,
  login,
  register,
  updateProfile,
} from "../controllers/users";
import {
  validateUserRegistration,
  validateUserLogin,
  handleValidationErrors,
} from "../validators/user.validator";

const router = express.Router();

router.post(
  "/register",
  validateUserRegistration,
  handleValidationErrors,
  register
);
router.post("/login", validateUserLogin, handleValidationErrors, login);
router.get("/profile", getProfile);
router.get("/profile", getProfile);
router.put("/profile", updateProfile);

export default router;
