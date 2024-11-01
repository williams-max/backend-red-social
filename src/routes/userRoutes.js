const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findById);
router.post('/users', userController.create);

module.exports = router;
