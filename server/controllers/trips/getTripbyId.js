import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

// eslint-disable-next-line consistent-return
const getTripbyId = async (req, res) => {
  const { tripId } = req.params;
  try {
  // eslint-disable-next-line radix
    const foundTrip = await Trip.findTrip(tripId);
    if (foundTrip.rows.length === 0) {
      return resPonse.errorMessage(res, 404, `No Trip found with Id ${tripId}`);
    } resPonse.successData(res, 200, foundTrip.rows);
  // eslint-disable-next-line no-empty
  } catch (err) {}
};
module.exports = getTripbyId;
