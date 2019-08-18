import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();

const getAllTrips = async (req, res) => {
  const foundtrips = await trip.getAllTrips();
  if (foundtrips.rowCount === 0){
    return resPonse.errorMessage(res, 404, 'no trips available at the moment');
  }
  const admin = jwt.decode(req.headers.authorization);
  if (admin.isadmin === true){
    return resPonse.successDatas(res, 200, foundtrips.rows.length, foundtrips.rows);
  }
};
module.exports = getAllTrips;
