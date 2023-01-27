const express = require('express');
const router = express.Router();
const { authToken } = require('../services/authService');
const { getProgrammingLanguages, create } = require('../controllers/programming.languages.controller');

/* GET programming languages. */
router.get('/list', [authToken ,getProgrammingLanguages]);

/* POST programming language */
router.post('/add', [authToken ,create]);

module.exports = router;