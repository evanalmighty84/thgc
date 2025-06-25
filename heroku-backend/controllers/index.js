// controllers/index.js
const express = require('express');
const { createEmail } = require('./contactController'); // this is the middleware array

const router = express.Router();

// POST /api/contactus
router.post('/contactus', createEmail);

module.exports = router;
