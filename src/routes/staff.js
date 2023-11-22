const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff');

router.get('/', staffController.getAllStaff);
router.put('/updateSalary/:id', staffController.updateSalary);
// router.put('/:id', staffController.updateStaff);
// router.delete('/:id', staffController.deleteStaff);

module.exports = router;
