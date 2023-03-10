const router = require('express').Router();
const withAuth = require('../../utils/auth');
const moment = require('moment');
const { Op, Sequelize } = require('sequelize');
const { Workout, Exercise, WorkoutExercise } = require('../../models');


router.get('/chart', withAuth, async (req, res) => {
  const startDate = moment().startOf('week').toDate();
  const endDate = moment().endOf('week').toDate();

  const counts = await Workout.findAll({ //Issue here - WorkoutExercise model returns "EagerLoadingError [SequelizeEagerLoadingError]: workout is not associated to workout_exercise!"
    attributes: [
      [Sequelize.fn('COUNT', Sequelize.col('workout_id')), 'count']
    ],
    include: [{
      model: Workout, //Needed for complete_date return
      attributes: [],
      where: {
        complete_date: {
          [Op.between]: [startDate, endDate]
        }
      }
    }],
    group: [Sequelize.literal('WEEK(complete_date)')],
    order: [Sequelize.literal('WEEK(complete_date) ASC')]
  });
  const labels = counts.map(count => `Week ${count.get('count')}`);
  const data = counts.map(count => count.get('count'));
  //Verify data is correct
console.log("+++++++++++++++++++++++++++++++++++++++++++")
console.log(data); 
console.log(labels);
console.log(counts);
console.log(startDate);
console.log(endDate);
console.log("+++++++++++++++++++++++++++++++++++++++++++")
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Exercises Completed',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  res.json(chartData);
});


//TESTING BAR TEST - Sample data works fine
// router.get('/chart', withAuth, (req, res) => {
//   const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
//   const datasets = [
//     {
//       label: 'Pushups',
//       data: [10, 20, 15, 25],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//     {
//       label: 'Squats',
//       data: [15, 25, 20, 30],
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1,
//     },
//   ];
//   const chartData = { labels, datasets };
//   res.json(chartData);
// });

// module.exports = router;



//talk with team about this
//Currently ignoring this until chart is updated and working properly!
router.get('/trends', async (req, res) => {
  const startDate = moment().startOf('week').toDate();
  const endDate = moment().endOf('week').toDate();

  const trendingWorkouts = await Workout.findAll({
    attributes: ['exercise.id', 'complete_date', [Sequelize.fn('COUNT', Sequelize.col('exercise_id')), 'count']],
    where: {
      complete_date: {
        [Op.between]: [startDate, endDate]
      }
    },
    group: ['exercise.id'],
    order: [[Sequelize.literal('count DESC')]],
    limit: 3,//Top 3
    include: [
      {
        model: Exercise,
        attributes: ['exercise_name'],
        through: { 
          model: WorkoutExercise,
          attributes: []
        }
      }
    ]
  });
  res.json(trendingWorkouts);
});
module.exports = router
