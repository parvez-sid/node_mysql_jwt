const express = require('express');
const router = express.Router();

const { userLogin } = require('../controllers/user.controller')

/* GET programming languages. */
router.post('/login', userLogin);

module.exports = router;