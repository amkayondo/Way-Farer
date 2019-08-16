import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const queryTrips = async (req, res, next) => {
  const foundtrips = await trip.getAllTrips();
  const { destination, origin } = req.query;
  const allTrips = foundtrips.rows;
  const gotOrigin = allTrips.filter(x => x.origin === origin);
  const gotDest = allTrips.filter(y => y.destination === destination);
  if (gotOrigin.length > 0) {
    return resPonse.successDatas(res, 200, gotOrigin.length, gotOrigin);
  }
  if (gotDest.length > 0) {
    return resPonse.successDatas(res, 200, gotDest.length, gotDest);
  }
  next();
};
module.exports = queryTrips;
