import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trips = Trip.tripDataBase;
const getAllTrips = (req, res, next) => {
  const { destination } = req.query;
  if (trips.length === 0) { return resPonse.errorMessage(res, 200, 'Not trips available'); }
  try {
    const foundDestination = Trip.findQueryByDestination(destination);
    if (foundDestination.length >= 1) { return resPonse.successData(res, 200, foundDestination); }
    next();
  // eslint-disable-next-line no-empty
  } catch (error) {}
  return true;
};
module.exports = getAllTrips;
