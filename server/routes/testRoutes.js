

const express = require('express');

const {testapi} = require('../controllers/testController');
const router = express.Router();

// Registration Route
router.get('/test',testapi);


module.exports = router;
