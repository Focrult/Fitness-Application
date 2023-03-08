//Data
const workouts = [
  {
    name: 'Running',
    type: 'cardio',
    musclegroup: ''
  },
  {
    name: 'Cycling',
    type: 'cardio',
    musclegroup: ''
  },
  {
    name: 'Swimming',
    type: 'cardio',
    musclegroup: ''
  },
  {
    name: 'Bench press',
    type: 'weightlifting',
    musclegroup: 'chest'
  },
  {
    name: 'Deadlift',
    type: 'weightlifting',
    musclegroup: 'back'
  },
  {
    name: 'Squats',
    type: 'weightlifting',
    musclegroup: 'legs'
  },
  {
    name: 'Push-ups',
    type: 'weightlifting',
    musclegroup: 'chest'
  },
  {
    name: 'Pull-ups',
    type: 'weightlifting',
    musclegroup: 'back'
  },
  {
    name: 'Lunges',
    type: 'weightlifting',
    musclegroup: 'legs'
  },
  {
    name: "Leg Extensions",
    type: 'weightlifting',
    musclegroup: "legs"
  },
  {
    name: "Leg Curls",
    type: 'weightlifting',
    musclegroup: "legs"
  },
  {
    name: "Situps",
    type: 'weightlifting',
    musclegroup: "core"
  },
];
//Currently just random!
const preferences = ['cardio', 'weightlifting'];

const workoutSchedule = [];
const numDays = 63;
let restDays = Math.ceil(numDays * 0.2);

for (let i = 0; i < numDays; i++) {
  const isRestDay = restDays > 0 && Math.random() < (restDays / (numDays - i));
  if (isRestDay) {
    restDays--;
    workoutSchedule.push({name: 'Rest Day', type: 'rest', musclegroup: ''});
  } else {
    const workoutType = preferences[Math.floor(Math.random() * preferences.length)];
    const filteredWorkouts = workouts.filter(workout => workout.type === workoutType);
    const randomWorkout = filteredWorkouts[Math.floor(Math.random() * filteredWorkouts.length)];
    workoutSchedule.push(randomWorkout);
  }
}
const table = document.createElement('table');
const tbody = document.createElement('tbody');
let tr = document.createElement('tr');
tbody.appendChild(tr);

workoutSchedule.forEach((exercise, index) => { //Fix this!
  if (index % 3 === 0) {
    tr = document.createElement('tr');
    tbody.appendChild(tr);
  }
  const td = document.createElement('td');
  const text = document.createTextNode(exercise.name);
  td.appendChild(text);
  tr.appendChild(td);
});

table.appendChild(tbody);
document.body.appendChild(table);