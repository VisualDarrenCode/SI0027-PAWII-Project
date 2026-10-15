// routes/karakterRoutes.js
const express = require('express');
const router = express.Router();
const karakterController = require('../controllers/karakterController');

router.get('/karakter', karakterController.getAll);
router.get('/karakter/:id', karakterController.getById);
router.post('/karakter', karakterController.create);
router.put('/karakter/:id', karakterController.update);
router.delete('/karakter/:id', karakterController.delete);

module.exports = router;