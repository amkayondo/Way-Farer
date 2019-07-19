import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trips = Trip.tripDataBase;
const getAllTrips = (req, res) => {
  resPonse.successData(res, 200, trips);
  return true;
};
module.exports = getAllTrips;
