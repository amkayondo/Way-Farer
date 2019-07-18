import express from 'express';
import createTrip from '../../controllers/trips/create_trip';
import appAuth from '../../middleware/appAuth';
import isAdmin from '../../middleware/isAdmin';

const tripRouter = express.Router();
// auth works
// tripRouter.post('/trips', appAuth, createTrip);

tripRouter.post('/trips', appAuth, isAdmin, createTrip);


module.exports = tripRouter;
