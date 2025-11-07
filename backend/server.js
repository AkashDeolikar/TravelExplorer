// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import nodemailer from 'nodemailer';

// ✅ Import routes (default exports)
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import placeRoutes from "./routes/placeRoutes.js";
import stateRoutes from "./routes/stateRoutes.js"; // optional if using states

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.get("/", (req, res) => res.send("🌍 Travel Explorer Backend Running"));
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/states", stateRoutes); // optional

//contact

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
