import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const cancelTrip = async (req, res) => {
  const { tripId } = req.params;
  const foundTrip = await trip.findTrip(tripId);
  if (foundTrip.rowCount === 0){
    return resPonse.errorMessage(res, 404, `Not Trip found with Id ${tripId}`);
  }
  if (foundTrip.rows[0].status === 'active') {
    await trip.updateTripStatus(tripId, 'cancelled');
    return resPonse.successWithNoData(res, 200, 'trip cancelled successfully');
  }
  if (foundTrip.rows[0].status === 'cancelled') {
    return resPonse.successWithNoData(res, 200, 'trip already cancelled');
  }
};
module.exports = cancelTrip;
