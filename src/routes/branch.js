const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branch');

router.get('/', branchController.getAllBranch);
router.get('/:id', branchController.getBranchById);
router.put('/:id', branchController.updateBranch);
router.post('/addBranch', branchController.addBranch);

module.exports = router;
