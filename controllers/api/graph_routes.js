const router = require('express').Router();
const withAuth = require('../../utils/auth');
const moment = require('moment');
const { Op, Sequelize } = require('sequelize');
const { Workout, Exercise, WorkoutExercise } = require('../../models');


router.get('/chart', withAuth, async (req, res) => {
  const startDate = moment().startOf('week').toDate();
  const endDate = moment().endOf('week').toDate();
  try{
    // Get all workout and exercises did in that workout between a certain date range
    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.user_id,
        complete_date: {
          [Op.between]: [startDate, endDate]
        }
      },
      include: [
        {
          model: Exercise
        },
      ],
    });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // For each workout, we add all exercise time and store it on each workout object for future use
    workouts.forEach(workout => {
      workout.exercise_time = 0;
      workout.exercises.forEach(exercise => {
        workout.exercise_time += exercise.workout_exercise.exercise_time;
      })
    });

    // BUild the label within array starts from the start of the week
    let labels = [moment(startDate).format("YYYY-MM-DD")];
    for (let i = 0; i < 5; i++) {
      const tempDate = new Date(startDate);
      tempDate.setDate(tempDate.getDate() + (i+1));
      labels.push(moment(tempDate).format("YYYY-MM-DD"));
    }
    labels.push(moment(endDate).format("YYYY-MM-DD"));

    // Data contains the total number of exercise mins for each date in the week;
    let data = [];

    // For eac label(date)
    labels.forEach((date, index) => {
      // Find all workouts on this date
      const allWorkoutOnThatDate = workouts.filter((workout) => workout.complete_date.getDate() == new Date(date).getDate())
      
      // Set a temp variable to store the exercise mins
      let totalWorkoutTimeOnThatDate = 0;

      // For each workout on this date, we add up all exercise_time of each workout
      allWorkoutOnThatDate.forEach((ele) => {
        totalWorkoutTimeOnThatDate += ele.exercise_time;
      })

      // Push the total number of exercise mins on the date to data array
      data.push(totalWorkoutTimeOnThatDate);
    })

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


    // const counts = await Workout.findAll({ //Issue here - WorkoutExercise model returns "EagerLoadingError [SequelizeEagerLoadingError]: workout is not associated to workout_exercise!"
    //   attributes: [
    //     [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
    //   ],
    //   where: {
    //     complete_date: {
    //       [Op.between]: [startDate, endDate]
    //     }
    //   },
    //   group: [Sequelize.literal('WEEK(complete_date)')],
    //   order: [Sequelize.literal('WEEK(complete_date) ASC')]
    // });
    // const labels = counts.map(count => `Week ${count.get('count')}`);
    // const data = counts.map(count => count.get('count'));
    //Verify data is correct
    // console.log("+++++++++++++++++++++++++++++++++++++++++++")
    // console.log(data); 
    // console.log(labels);
    // console.log(counts);
    // console.log(startDate);
    // console.log(endDate);
    // console.log("+++++++++++++++++++++++++++++++++++++++++++")
    // const chartData = {
    //   labels,
    //   datasets: [
    //     {
    //       label: 'Exercises Completed',
    //       data,
    //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //       borderColor: 'rgba(54, 162, 235, 1)',
    //       borderWidth: 1,
    //     },
    //   ],
    // };
    res.json(chartData);
  }
  catch (err) {
    res.status(400).json(err);
  }
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
