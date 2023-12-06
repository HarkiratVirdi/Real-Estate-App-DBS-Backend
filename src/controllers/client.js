const { executeQuery } = require('../config/connectDB');
const { clientQueries } = require('../queries/queries');
const {
  createErrorResponse,
  createSuccessResponse,
} = require('../utils/responseObj');

const getAllClients = async (req, res) => {
  try {
    const result = await executeQuery(clientQueries.getAllClients());
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error Fetching all client info'));
  }
};

const updateClient = async (req, res) => {
  const clientNo = req.params.id;
  try {
    const result = await executeQuery(
      clientQueries.updateClient(
        req.body.fname,
        req.body.lname,
        req.body.telno,
        req.body.city,
        req.body.street,
        clientNo
      )
    );
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error updating client info'));
  }
};

const addClient = async (req, res) => {
  try {
    const result = await executeQuery(
      clientQueries.addNewClient(
        req.body.clientNo,
        req.body.fname,
        req.body.lname,
        req.body.telno,
        req.body.street,
        req.body.city,
        req.body.email,
        req.body.preftype,
        req.body.maxrent
      )
    );
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error adding new client info'));
  }
};

module.exports = { getAllClients, updateClient, addClient };
