import express from 'express';
import createBooking from '../../controllers/bookings/createBooking';
import deleteBooking from '../../controllers/bookings/deleteBooking';
import Validator from '../../middleware/validators/validateInput';
import getAllBookings from '../../controllers/bookings/getAllBookings';
import ValidateReqBooking from '../../middleware/validators/validateBookindId';

import appAuth from '../../middleware/appAuth';

const bookingRouter = express.Router();
bookingRouter.post('/bookings', appAuth, Validator.booking, createBooking);
bookingRouter.get('/bookings', appAuth, getAllBookings);
bookingRouter.delete('/bookings/:bookingId', appAuth, ValidateReqBooking.validBookingId, deleteBooking);


module.exports = bookingRouter;
