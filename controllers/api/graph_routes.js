const router = require('express').Router();
const { Workout } = require('../../models');
const Chart = require('chart.js');

router.get('/matrix', async (req, res) => {
  try {
    const activities = await Workout.find().lean();
    const dataByWeek = {};
    
    activities.forEach(activity => {
      const date = new Date(activity.date);
      const weekStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
      const weekEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6);
      const weekLabel = `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
      if (!dataByWeek[weekLabel]) {
        dataByWeek[weekLabel] = 0;
      }
      dataByWeek[weekLabel] += activity.count;
    });
    const chartData = {
      labels: Object.keys(dataByWeek),
      datasets: [{
        label: 'Activities Completed',
        data: Object.values(dataByWeek),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
    const templateData = { chartData: JSON.stringify(chartData) };
    console.log(templateData);
    res.render('chart', { templateData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;