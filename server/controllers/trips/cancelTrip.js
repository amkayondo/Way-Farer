import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const cancelTrip = (req, res) => {
  const { tripId } = req.params;
  const foundTrip = Trip.findTrip(tripId);
  if (foundTrip) {
    foundTrip.status = 'cancelled';
    const cancelResponse = { message: 'Trip cancelled successfully' };
    return resPonse.successData(res, 200, cancelResponse);
  } resPonse.errorMessage(res, 404, `Not Trip found with Id ${tripId}`);
  return true;
};

module.exports = cancelTrip;
