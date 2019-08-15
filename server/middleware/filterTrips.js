import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';
import checkIfNotAdmin from '../helpers/users/checkIfnotAdmin';
import Trip from '../models/trips';

const trip = new Trip();

const allTrips = async (req, res, next) => {
  const foundtrips = await trip.getAllTrips();
  const tripData = foundtrips.rows;
  const notadmin = jwt.decode(req.headers.authorization);
  const activeTrips = tripData.filter(x => x.status === 'active');
  if (checkIfNotAdmin(req, notadmin)){
    if (activeTrips.length > 0){
      return resPonse.successDatas(res, 200, activeTrips.length, activeTrips);
    }
  }
  next();
};

module.exports = allTrips;
