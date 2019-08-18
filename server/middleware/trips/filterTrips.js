import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const allTrips = async (req, res, next) => {
  const foundtrips = await trip.getAllTrips();
  const tripData = foundtrips.rows;
  const notadmin = jwt.decode(req.headers.authorization);
  const activeTrips = tripData.filter(x => x.status === 'active');
  if (notadmin.isadmin === false){
    if (activeTrips.length > 0){
      return resPonse.successDatas(res, 200, activeTrips.length, activeTrips);
    } resPonse.errorMessage(res, 404, 'no trips found at the moment');
  }
  next();
};
module.exports = allTrips;
