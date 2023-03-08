const { Workout } = require('../models');

const workoutData = [
  {
    "complete_date": "2/2/23",
    "user_id": 1
  },
  {
    "complete_date": "5/2/23",
    "user_id": 2
  },
  {
    "complete_date": "6/2/23",
    "user_id": 1
  },
  {
    "complete_date": "8/2/23",
    "user_id": 2
  },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;