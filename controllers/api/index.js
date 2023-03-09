const router = require('express').Router();

const userRoutes = require('./user_routes');
const matrixRoutes = require('./graph_routes');

router.use('/user', userRoutes);
router.use('/matrix', matrixRoutes);

module.exports = router;