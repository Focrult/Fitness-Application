const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard_routes');
const matrixRoutes = require('./api/graph_routes');
router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/matrix', matrixRoutes)
module.exports = router;
