import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trips = Trip.tripDataBase;
const getAllTrips = (req, res, next) => {
  const { destination, origin } = req.query;
  if (trips.length === 0) { return resPonse.successWithNoData(res, 404, 'No trips available'); }
  try {
    const foundDestination = Trip.findQueryByDestination(destination);
    const foundOrigin = Trip.findQueryByOrigin(origin);
    if (foundDestination.length >= 1) { return resPonse.successData(res, 200, foundDestination); }
    if (foundOrigin.length >= 1) { return resPonse.successData(res, 200, foundOrigin); }
    next();
  // eslint-disable-next-line no-empty
  } catch (error) {}
  return true;
};
module.exports = getAllTrips;
