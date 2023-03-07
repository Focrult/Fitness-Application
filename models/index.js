const User = require("./User");
const Workout = require("./Workout");

// Define associations
User.hasMany(Workout, { onDelete: "cascade" });
Workout.belongsTo(User);

module.exports = {
  User,
  Workout,
};
