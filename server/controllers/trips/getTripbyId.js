import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

// eslint-disable-next-line consistent-return
const getTripbyId = (req, res) => {
  const inpuT = req.params.tripId;
  const foundTrip = Trip.findTrip(inpuT);
  if (foundTrip) {
    return resPonse.successData(res, 200, foundTrip);
  } resPonse.errorMessage(res, 404, `No Trip found with Id ${inpuT}`);
};
module.exports = getTripbyId;
