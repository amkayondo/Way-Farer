import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const getTripbyId = async (req, res) => {
  const { tripId } = req.params;
  try {
    const foundTrip = await trip.findTrip(tripId);
    if (foundTrip.rows.length === 0) {
      return resPonse.errorMessage(res, 404, `No Trip found with Id ${tripId}`);
    } resPonse.successData(res, 200, 'Trip found', foundTrip.rows[0]);
  } catch (err) {}
};
module.exports = getTripbyId;
