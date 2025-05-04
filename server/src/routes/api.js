import express from "express";
import * as UserController from "../controllers/UserController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import * as DonationController from "../controllers/DonationController.js";
import * as EventController from "../controllers/DonationEventController.js";
import * as DeleteFileUtility from "../utility/DeleteFileUtility.js"
import upload from "../middlewares/FileUploads.js";
//import uthMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

//users
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/OTP/:email",UserController.useOTP);
router.get('/VerifyLogin/:email/:otp',UserController.verifyOTP);
router.get('/user-details',authMiddleware.default, UserController.UserDetails);
router.post("/changed-password", authMiddleware.default , UserController.changePassword);

//admin donation
router.post("/create-donation",authMiddleware.default,DonationController.createDonation);
router.post("/create-event",authMiddleware.default,EventController.createEventController);
router.put("/:id/update-event",authMiddleware.default,EventController.updateEventController);
router.get("/:id/event",authMiddleware.default,EventController.findEventByIdController);
router.get("/activity",authMiddleware.default,EventController.AllEventController);

router.get("/find-all-donations",authMiddleware.default,EventController.findEventController);
router.get("/on-going-events",authMiddleware.default,EventController.getOnGoingEventController);
router.get("/:id",authMiddleware.default,DonationController.DonationDetailsByDonationId);
//router.get("/details/user", authMiddleware.default, DonationController.getDonationsByUserId);
router.get('/donations-admin/user', authMiddleware.default, DonationController.AdminDonation);


// file-route
router.post("/file-upload", upload.single("file"), FileUploadController.fileUpload);
router.delete("/delete-file/:filename", DeleteFileUtility.deleteUploadedFile);

export default router;