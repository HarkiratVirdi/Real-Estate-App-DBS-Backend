const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff');

router.get('/', staffController.getAllStaff);
router.put('/updateStaff/:id', staffController.updateStaff);
router.post('/addStaff', staffController.addNewStaff);

module.exports = router;
