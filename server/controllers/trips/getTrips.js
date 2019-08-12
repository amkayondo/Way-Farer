import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';


const getAllTrips = async (req, res) => {
  const foundtrips = await Trip.getAllTrips();
  if (foundtrips.rows.length > 0) {
    return resPonse.successDatas(res, 200, foundtrips.rows.length, foundtrips.rows);
  } resPonse.errorMessage(res, 400, 'No trips available at the moment');

  return true;
};
module.exports = getAllTrips;
