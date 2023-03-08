const { WorkoutExercise } = require('../models');

const workoutExerciseTagData = [
  {
    workout_id:1,
    exercise_id: 1,
  },
  {
    workout_id:1,
    exercise_id: 2,
  },  
  {
    workout_id:1,
    exercise_id: 3,
  },  
  {
    workout_id:2,
    exercise_id: 1,
  },
  {
    workout_id:2,
    exercise_id: 3,
  },  
  {
    workout_id:2,
    exercise_id: 5,
  }, 
];

const seedWorkoutExercise = () => WorkoutExercise.bulkCreate(workoutExerciseTagData);

module.exports = seedWorkoutExercise;