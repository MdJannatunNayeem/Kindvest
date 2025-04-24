import express from "express";
import * as UserController from "../controllers/UserController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import upload from "../middlewares/FileUploads.js";
const router = express.Router();

//users
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/OTP/:email",UserController.useOTP);
router.get('/VerifyLogin/:email/:otp',UserController.verifyOTP);
router.get('/user-details',authMiddleware.default, UserController.UserDetails);
router.post("/changed-password", authMiddleware.default , UserController.changePassword);

// file-route
router.post("/file-upload", upload.single("file"), FileUploadController.fileUpload);

export default router;