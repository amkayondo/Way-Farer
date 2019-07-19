import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
// resPonse.successData(res, 200, trips);
const trips = Trip.tripDataBase;
const getAllTrips = (req, res) => {
  const { destination } = req.query;
  const foundDestination = Trip.findQueryByDestination(destination);
  if (trips.length !== 0) {
    if (foundDestination) {
      resPonse.successData(res, 200, foundDestination);
    } else { resPonse.errorMessage(res, 200, 'No trips found'); }
  } else {
    resPonse.successData(res, 200, trips);
  }
  resPonse.errorMessage(res, 200, 'No trips available');
};
module.exports = getAllTrips;
