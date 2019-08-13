import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const getTripbyId = async (req, res) => {
  const { tripId } = req.params;
  try {
    const foundTrip = await Trip.findTrip(tripId);
    if (foundTrip.rows.length === 0) {
      return resPonse.errorMessage(res, 404, `No Trip found with Id ${tripId}`);
    } resPonse.successData(res, 200, foundTrip.rows[0]);
  } catch (err) {}
};
module.exports = getTripbyId;
