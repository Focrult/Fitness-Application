const User = require("./User");
const Workout = require("./Workout");
const Exercise = require("./Exercise");
const WorkoutExercise = require("./workout_exercise");

// Define associations
Workout.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Exercise.belongsToMany(Workout, {
  through: {model: WorkoutExercise},
});


Workout.belongsToMany(Exercise, {
  through: {model: WorkoutExercise},
});




module.exports = {
  User,
  Workout,
  Exercise,
  WorkoutExercise,
};
