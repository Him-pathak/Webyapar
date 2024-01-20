const express = require('express');
const { handleUserLogin } = require('../controllers/auth');

const router = express.Router();

router.post('/login', handleUserLogin);

module.exports = router;