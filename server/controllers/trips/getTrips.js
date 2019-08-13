/* eslint-disable no-empty */
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';


const getAllTrips = async (req, res) => {
  try {
    const foundtrips = await Trip.getAllTrips();
    if (foundtrips.rows.length > 0) {
      return resPonse.successDatas(res, 200, foundtrips.rows.length, foundtrips.rows);
    } resPonse.errorMessage(res, 404, 'No trips available at the moment');
  } catch (err) { }

  return true;
};
module.exports = getAllTrips;
