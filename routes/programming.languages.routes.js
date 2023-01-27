const express = require('express');
const router = express.Router();
const { authToken } = require('../services/authService');
const { getProgrammingLanguages, create, update, remove, get } = require('../controllers/programming.languages.controller');

/* GET programming languages. */
router.get('/list', [authToken ,getProgrammingLanguages]);

/* POST programming language */
router.post('/add', [authToken ,create]);

/* PUT programming language */
router.put('/:id', [authToken, update]);

/* DELETE programming language */
router.delete('/:id', [authToken, remove]);

// Get One Programming Language
router.get('/:id', [authToken, get])

module.exports = router;