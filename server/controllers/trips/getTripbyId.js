import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

// eslint-disable-next-line consistent-return
const getTripbyId = async (req, res) => {
  const { inpuT } = req.params;
  try {
  // eslint-disable-next-line radix
    if (inpuT === parseInt(inpuT)) {
      const foundTrip = await Trip.findTrip(inpuT);
      if (foundTrip.rows.length === 0) {
        return resPonse.errorMessage(res, 404, `No Trip found with Id ${inpuT}`);
      } resPonse.successData(res, 200, foundTrip.rows);
    } resPonse.errorMessage(res, 404, 'Only Intengers allowed');
  // eslint-disable-next-line no-empty
  } catch (err) {}
};
module.exports = getTripbyId;
