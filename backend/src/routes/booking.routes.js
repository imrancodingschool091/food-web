// routes/bookingRoutes.js
import express from 'express';
import { createBooking,getAllBookings } from '../controllers/booking.controller.js';

const router = express.Router();

// POST a booking
router.post('/', createBooking);

// GET all bookings
router.get('/', getAllBookings);

export default router;
