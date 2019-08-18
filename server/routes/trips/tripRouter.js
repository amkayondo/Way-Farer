import express from 'express';
import createTrip from '../../controllers/trips/createTrip';
import getTripbyId from '../../controllers/trips/getTripbyId';
import Validator from '../../middleware/validators/validateInput';
import ValidateReq from '../../middleware/validators/validateReq';
import filterByAdmin from '../../middleware/trips/filterTripId';
import allTrips from '../../middleware/trips/filterTrips';
import getAllTrips from '../../controllers/trips/getTrips';
import queryTrips from '../../controllers/trips/queryTrips';
import validateQuery from '../../middleware/validators/validateQuery';
import cancelTrip from '../../controllers/trips/cancelTrip';
import appAuth from '../../middleware/appAuth';
import isAdmin from '../../middleware/isAdmin';

const tripRouter = express.Router();
tripRouter.get('/trips/:tripId', ValidateReq.validId, filterByAdmin, getTripbyId);
tripRouter.post('/trips', appAuth, isAdmin, Validator.trip, createTrip);
tripRouter.get('/trips', appAuth, validateQuery, queryTrips, allTrips, getAllTrips);
tripRouter.patch('/trips/:tripId', appAuth, isAdmin, cancelTrip);

module.exports = tripRouter;
