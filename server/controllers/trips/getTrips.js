import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();

const getAllTrips = async (req, res) => {
  try {
    const foundtrips = await trip.getAllTrips();
    if (foundtrips.rows.length > 0) {
      return resPonse.successDatas(res, 200, foundtrips.rows.length, foundtrips.rows);
    } resPonse.errorMessage(res, 404, 'No trips available at the moment');
  } catch (err) {
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = getAllTrips;
