// backend/controllers/placeController.js
import Place from "../models/placeModel.js";

// GET /api/places?state=&category=&q=
export const getPlaces = async (req, res) => {
  try {
    const { state, category, q } = req.query;
    const filter = {};

    if (state) filter.state = state;
    if (category) filter.category = category;
    if (q) {
      const re = new RegExp(q, "i");
      filter.$or = [
        { name: re },
        { description: re },
        { state: re },
        { category: re }
      ];
    }

    const places = await Place.find(filter).sort({ createdAt: -1 });
    res.json(places);
  } catch (err) {
    console.error("❌ Failed to fetch places:", err);
    res.status(500).json({ message: "Failed to fetch places", error: err.message });
  }
};

// GET /api/places/:id
export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Place id required" });

    const place = await Place.findById(id);
    if (!place) return res.status(404).json({ message: "Place not found" });

    res.json(place);
  } catch (err) {
    console.error("❌ Failed to fetch place by id:", err);
    res.status(500).json({ message: "Failed to fetch place", error: err.message });
  }
};

// POST create a new place
export const createPlace = async (req, res) => {
  try {
    const newPlace = new Place(req.body);
    const savedPlace = await newPlace.save();
    res.status(201).json(savedPlace);
  } catch (err) {
    console.error("❌ Failed to create place:", err);
    res.status(400).json({ message: "Failed to create place", error: err.message });
  }
};

// GET /api/places/filters
export const getFilters = async (req, res) => {
  try {
    const states = await Place.distinct("state");
    const categories = await Place.distinct("category");
    res.json({
      states: states.filter(Boolean),
      categories: categories.filter(Boolean)
    });
  } catch (err) {
    console.error("❌ Failed to fetch filters:", err);
    res.status(500).json({ message: "Failed to fetch filters", error: err.message });
  }
};
