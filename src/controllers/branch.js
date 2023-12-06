const { executeQuery } = require('../config/connectDB');
const { branchQueries } = require('../queries/queries');
const {
  createErrorResponse,
  createSuccessResponse,
} = require('../utils/responseObj');

const getAllBranch = async (req, res) => {
  try {
    const result = await executeQuery(branchQueries.getAllBranches());
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error Fetching all branch info'));
  }
};

const getBranchById = async (req, res) => {
  try {
    const query = branchQueries.getBranchById(req.params.id);
    const result = await executeQuery(query);
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error Fetching branch info'));
  }
};

const updateBranch = async (req, res) => {
  try {
    const query = branchQueries.updateBranchDetails(
      req.body.city,
      req.body.street,
      req.body.postcode,
      req.params.id
    );
    const result = await executeQuery(query);
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    return res
      .status(403)
      .json(createErrorResponse(403, 'Error updating branch info'));
  }
};

const addBranch = async (req, res) => {
  try {
    const query = branchQueries.addNewBranch(
      req.body.branchNo,
      req.body.street,
      req.body.city,
      req.body.postcode
    );

    const result = await executeQuery(query);
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    res.status(403).json(createErrorResponse(403, 'Error Adding new Branch'));
  }
};

module.exports = { getAllBranch, getBranchById, updateBranch, addBranch };
