const express = require('express');
const router = express.Router();
const { authToken } = require('../services/authService');
const { getProgrammingLanguages } = require('../controllers/programming.languages.controller');

/* GET programming languages. */
router.get('/list', [authToken ,getProgrammingLanguages]);

module.exports = router;