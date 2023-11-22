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

const addNewStaff = async (req, res) => {
  try {
    const result = await executeQuery(staffQueries.getAllStaff());
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', error);
    return res
      .status(403)
      .json(createErrorResponse('Error adding new staff member'));
  }
};

const updateSalary = async (req, res) => {
  const staffId = req.params.id;
  const newStaffSalary = req.body.salary;
  try {
    const result = await executeQuery(
      staffQueries.updateSalary(newStaffSalary, staffId)
    );
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', error);
    return res
      .status(403)
      .json(
        createErrorResponse(`Error updating salary for staff member ${staffId}`)
      );
  }
};

module.exports = { getAllStaff, addNewStaff, updateSalary };
