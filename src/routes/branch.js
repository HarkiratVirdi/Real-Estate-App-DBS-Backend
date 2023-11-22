const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branch');

router.get('/', branchController.getAllBranch);
router.get('/:id', branchController.getBranchById);

module.exports = router;
