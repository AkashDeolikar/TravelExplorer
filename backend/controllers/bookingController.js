// const Booking = require("../models/bookingModel");

// //BOOKING CREATED
// exports.createBooking = async (req , res) => {
//     try{
//         const booking = await Booking.create({
//             user: req.body.user,
//             destination: req.body.destination,
//             date: req.body.date,
//             travelers: req.body.travelers,
//             specialRequests: req.body.specialRequests,
//         });
//         res.status(201).json(booking);
//     }catch(error){
//         res.status(400).json({ message: error.message });
//     }
// };

// //GET ALL BOOKING FOR A USER
// exports.getBookingsByUser = async (req, res) => {
//     try{
//         const booking = await Booking.find({ user: req.params.userId }).populate("user", "name email");
//         res.json(booking);
//     }catch(error){
//         res.status(500).json({ message: error.message });
//     }
// };

// //CANCEL A BOOKING
// exports.deleteBooking = async (req, res) => {
//     try{
//         await Booking.findByIdAndDelete(req.params.id);
//         res.json({ message: "Booking cancelled successfully"});
//     } catch(error) {
//         res.status(500).json({ message: error.message });
//     }
// };
import Booking from '../models/bookingModel.js';

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user._id
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id });
    res.json(bookings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
