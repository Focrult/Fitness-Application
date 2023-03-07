const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Workout = sequelize.define('Workout', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  
  Workout.prototype.completeExercise = function(exerciseName) {
    const completedExercises = this.getDataValue('completedExercises');
    const date = new Date().toISOString().slice(0, 10); // Get today's date in ISO format (yyyy-mm-dd)
    
    if (!completedExercises[exerciseName]) {
      completedExercises[exerciseName] = [];
    }
    
    completedExercises[exerciseName].push(date);
    this.setDataValue('completedExercises', completedExercises);
  };
  
  module.exports = Workout;
 
