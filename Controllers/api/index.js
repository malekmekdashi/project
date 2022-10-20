const router = require('express').Router();
const userRoutes = require('./userRoutes');

// this is where request are made
router.use('/users', userRoutes);

module.exports = router;