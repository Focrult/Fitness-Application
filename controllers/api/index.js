const router = require('express').Router();

const userRoutes = require('./user_routes');
const chartRoute = require('./graph_routes');

router.use('/user', userRoutes);
router.use('/matrix', chartRoute);

module.exports = router;