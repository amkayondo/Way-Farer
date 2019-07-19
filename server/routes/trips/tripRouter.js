import express from 'express';
import createTrip from '../../controllers/trips/createTrip';
import getTripbyId from '../../controllers/trips/getTripbyId';
import getAllTrips from '../../controllers/trips/getTrips';
import queryTrips from '../../controllers/trips/queryTrips';
import appAuth from '../../middleware/appAuth';
import isAdmin from '../../middleware/isAdmin';

const tripRouter = express.Router();
tripRouter.get('/trips/:tripId', getTripbyId);
tripRouter.post('/trips', appAuth, isAdmin, createTrip);
tripRouter.get('/trips', queryTrips, getAllTrips);

module.exports = tripRouter;
