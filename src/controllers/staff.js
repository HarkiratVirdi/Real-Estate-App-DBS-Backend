const { executeQuery } = require('../config/connectDB');
const { staffQueries, CommitQuery } = require('../queries/queries');
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
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse('Error Fetching all staff info'));
  }
};

const addNewStaff = async (req, res) => {
  try {
    const result = await executeQuery(
      staffQueries.addNewStaff(
        req.body.STAFFNO,
        req.body.FNAME,
        req.body.LNAME,
        req.body.POSITION,
        req.body.SEX,
        req.body.DOB,
        req.body.SALARY,
        req.body.BRANCHNO,
        req.body.TELEPHONE,
        req.body.MOBILE,
        req.body.EMAIL
      )
    );
    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(createErrorResponse('Error adding new staff member'));
  }
};

const updateStaff = async (req, res) => {
  const staffId = req.params.id;
  try {
    const result = await executeQuery(
      staffQueries.updateStaff(
        req.body.salary,
        req.body.telephone,
        req.body.email,
        staffId
      )
    );

    return res.status(200).json(createSuccessResponse({ data: result }));
  } catch (err) {
    console.log('error', err);
    return res
      .status(403)
      .json(
        createErrorResponse(`Error updating salary for staff member ${staffId}`)
      );
  }
};

module.exports = { getAllStaff, addNewStaff, updateStaff };
