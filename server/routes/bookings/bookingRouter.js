import express from 'express';
import createBooking from '../../controllers/bookings/createBooking';

import appAuth from '../../middleware/appAuth';

const bookingRouter = express.Router();
bookingRouter.post('/bookings', appAuth, createBooking);


module.exports = bookingRouter;
