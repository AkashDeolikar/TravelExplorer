import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const districtSchema = new mongoose.Schema({
  name: String,
  places: [placeSchema],
});

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  capital: String,
  imageUrl: String,
  districts: [districtSchema],
});

export default mongoose.model("State", stateSchema);
