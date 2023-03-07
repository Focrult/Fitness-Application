const { Workout } = require('../models');

const workoutData = [
  {
    name: 'Leg day',
    description: 'Squats, lunges, leg press',
    duration: 60,
    completed: false,
  },
  {
    name: 'Chest and triceps',
    description: 'Bench press, push-ups, dips',
    duration: 45,
    completed: true,
  },
  // Add more workout data as needed, make changes to suit preferences e.g swimming and running
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;