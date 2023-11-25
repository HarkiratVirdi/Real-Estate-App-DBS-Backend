const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

router.get('/', clientController.getAllClients);
router.get('/updateClient/:id', clientController.updateClient);
router.get('/addClient', clientController.addClient);

module.exports = router;
