import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const cancelTrip = async (req, res) => {
  const { tripId } = req.params;
  try {
    const foundTrip = await Trip.findTrip(tripId);
    if (foundTrip.rows.length > 0) {
      await Trip.updateTripStatus(tripId, 'cancelled');
      const cancelResponse = { message: 'Trip cancelled successfully' };
      return resPonse.successData(res, 200, cancelResponse);
    } resPonse.errorMessage(res, 404, `Not Trip found with Id ${tripId}`);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = cancelTrip;
