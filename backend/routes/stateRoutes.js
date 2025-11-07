import express from "express";
import {
  getAllStates,
  getDistrictsByState,
  getPlacesByDistrict,
} from "../controllers/stateController.js";

const router = express.Router();

router.get("/", getAllStates);
router.get("/:stateName/districts", getDistrictsByState);
router.get("/:stateName/districts/:districtName/places", getPlacesByDistrict);

export default router;
