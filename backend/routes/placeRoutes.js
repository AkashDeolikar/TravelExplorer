// backend/routes/placeRoutes.js
import express from "express";
import {
  getPlaces,
  createPlace,
  getFilters,
  getPlaceById
} from "../controllers/placeController.js";

const router = express.Router();

router.get("/", getPlaces);         // GET /api/places
router.get("/filters", getFilters); // GET /api/places/filters
router.get("/:id", getPlaceById);   // GET /api/places/:id
router.post("/", createPlace);      // POST /api/places

export default router; 
