import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';


const queryTrips = async (req, res, next) => {
  try {
    const foundtrips = await Trip.getAllTrips();

    const { destination, origin } = req.query;
    if (foundtrips.rowcount === 0) { return resPonse.successWithNoData(res, 404, 'No trips available'); }

    const allTrips = foundtrips.rows;
    const gotOrigin = allTrips.filter(x => x.origin === origin);
    const gotDest = allTrips.filter(y => y.destination === destination);

    if (gotOrigin.length > 0) {
      return resPonse.successDatas(res, 200, gotOrigin.length, gotOrigin);
    }

    if (gotDest.length > 0) {
      return resPonse.successDatas(res, 200, gotDest.length, gotDest);
    }
    next();
  } catch (error) {
    resPonse.errorMessage(res, 500, error.message);
  }
};
module.exports = queryTrips;
