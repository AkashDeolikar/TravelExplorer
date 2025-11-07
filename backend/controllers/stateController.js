import State from "../models/stateModel.js";

// Fetch all states
export const getAllStates = async (req, res) => {
  try {
    const states = await State.find({}, "name capital imageUrl");
    res.json(states);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch districts by state
export const getDistrictsByState = async (req, res) => {
  try {
    const state = await State.findOne({ name: req.params.stateName });
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state.districts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch places by district
export const getPlacesByDistrict = async (req, res) => {
  try {
    const state = await State.findOne({ name: req.params.stateName });
    if (!state) return res.status(404).json({ message: "State not found" });

    const district = state.districts.find(
      (d) => d.name.toLowerCase() === req.params.districtName.toLowerCase()
    );
    if (!district) return res.status(404).json({ message: "District not found" });

    res.json(district.places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
