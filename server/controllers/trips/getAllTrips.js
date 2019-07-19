import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trips = Trip.tripDataBase;
const getAllTrips = (req, res) => {
  if (trips.length === 0) {
    return resPonse.errorMessage(res, 200, 'No trips available at the moment');
  } resPonse.successData(res, 200, trips);
  return true;
};
module.exports = getAllTrips;
