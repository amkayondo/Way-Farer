import express from 'express';
import createBooking from '../../controllers/bookings/createBooking';
import deleteBooking from '../../controllers/bookings/deleteBooking';
import getAllBookings from '../../controllers/bookings/getAllBookings';


import appAuth from '../../middleware/appAuth';

const bookingRouter = express.Router();
bookingRouter.post('/bookings', appAuth, createBooking);
bookingRouter.get('/bookings', appAuth, getAllBookings);
bookingRouter.delete('/bookings/:bookingId', appAuth, deleteBooking);


module.exports = bookingRouter;
