import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();

const cancelTrip = async (req, res) => {
  const { tripId } = req.params;
  try {
    const foundTrip = await trip.findTrip(tripId);
    if (foundTrip.rows.length > 0) {
      await trip.updateTripStatus(tripId, 'cancelled');
      return resPonse.successWithNoData(res, 200, 'Trip cancelled successfully');
    } resPonse.errorMessage(res, 404, `Not Trip found with Id ${tripId}`);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = cancelTrip;
