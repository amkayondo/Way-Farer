import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();

const allTrips = async (req, res, next) => {
  const { tripId } = req.params;
  const foundtrips = await trip.getTripById(tripId);
  const tripData = foundtrips.rows;
  const notadmin = jwt.decode(req.headers.authorization);
  const activeTrips = tripData.filter(x => x.status === 'cancelled');
  if (notadmin.isadmin === false){
    if (activeTrips.length === 1){
      return resPonse.errorMessage(res, 405, `the Trip with Id ${tripId} is already cancelled`);
    }
  }
  next();
};

module.exports = allTrips;
