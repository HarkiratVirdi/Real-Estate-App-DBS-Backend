const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

router.get('/', clientController.getAllClients);
router.put('/updateClient/:id', clientController.updateClient);
router.post('/addClient', clientController.addClient);

module.exports = router;
