// backend/models/placeModel.js
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    state: String,
    category: String,
    image: String
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);
export default Place; // ✅ ESM export
