// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");

// //CREATE A NEW BOOKING
// router.post("/", bookingController.createBooking);

// //GET ALL BOOKING FOR A USER
// router.get("/:userId", bookingController.getBookingsByUser);

// //DELETE BOOKING BY ID
// router.delete("/:id", bookingController.deleteBooking);

// module.exports = router;
// backend/routes/bookingRoutes.js
import express from "express";
import { createBooking, getBookingsByUser, deleteBooking } from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getBookingsByUser);
router.delete('/:id', protect, deleteBooking);

export default router; // ES Module export

