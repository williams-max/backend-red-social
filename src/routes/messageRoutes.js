const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

router.get('/message', messageController.findAll);
router.get('/message/:id', messageController.findById);
router.post('/message', messageController.create);

module.exports = router;
