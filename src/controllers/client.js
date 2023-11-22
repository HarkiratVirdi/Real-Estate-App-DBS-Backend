const { executeQuery } = require('../config/connectDB');
const { clientQueries } = require('../queries/queries');
const {
  createErrorResponse,
  createSuccessResponse,
} = require('../utils/responseObj');

const getAllClient = async (req, res) => {
  try {
    const result = await executeQuery(clientQueries.getAllClients());
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', error);
    return res
      .status(403)
      .json(createErrorResponse('Error Fetching all client info'));
  }
};

module.exports = { getAllClient };
