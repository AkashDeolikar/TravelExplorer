// backend/models/bookingModel.js
import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking; // ES Module default export
