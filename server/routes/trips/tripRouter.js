import express from 'express';
import createTrip from '../../controllers/trips/createTrip';
import getTripbyId from '../../controllers/trips/getTripbyId';
import Validator from '../../middleware/validators/validateInput';
import getAllTrips from '../../controllers/trips/getTrips';
import queryTrips from '../../controllers/trips/queryTrips';
import cancelTrip from '../../controllers/trips/cancelTrip';
import appAuth from '../../middleware/appAuth';
import isAdmin from '../../middleware/isAdmin';

const tripRouter = express.Router();
tripRouter.get('/trips/:tripId', getTripbyId);
tripRouter.post('/trips', appAuth, isAdmin, Validator.trip, createTrip);
tripRouter.get('/trips', queryTrips, getAllTrips);
tripRouter.patch('/trips/:tripId', appAuth, isAdmin, cancelTrip);

module.exports = tripRouter;
