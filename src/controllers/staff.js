const { executeQuery } = require('../config/connectDB');
const { staffQueries } = require('../queries/queries');
const {
  createErrorResponse,
  createSuccessResponse,
} = require('../utils/responseObj');

const getAllStaff = async (req, res) => {
  try {
    const result = await executeQuery(staffQueries.getAllStaff());
    console.log('result', result);
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', error);
    return res
      .status(403)
      .json(createErrorResponse('Error Fetching all staff info'));
  }
};

module.exports = { getAllStaff };
