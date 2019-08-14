import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();

const getAllTrips = async (req, res) => {
  try {
    const foundtrips = await trip.getAllTrips();
    const tripData = foundtrips.rows;
    const activeTrips = tripData.filter(x => x.status === 'active');
    const admin = jwt.decode(req.headers.authorization);
    if (admin.isadmin === true){
      return resPonse.successDatas(res, 200, foundtrips.rows.length, foundtrips.rows);
    }
    if (!admin.isadmin === true) {
      return resPonse.successDatas(res, 200, foundtrips.rows.length, activeTrips);
    } resPonse.errorMessage(res, 404, 'No trips available at the moment');
  } catch (err) {
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = getAllTrips;
