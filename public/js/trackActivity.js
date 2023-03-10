const trackActivity = async (event) => {
  console.log('testing  click');
  event.preventDefault();

  const exercise = document.querySelector('exercise-name').value.trim();


  const response = await fetch('/api/exercises',{
    method: 'POST',
    body: JSON.stringify({title,text}),
    headers: {'Content-Type': 'application/json'}
  });

  if(response.okay){
    document.location.replace('exercisesAll');
  } else{
    alert(response.statusText);
  }
}

document.querySelector('.track-activity')
.addEventListener('submit', trackActivity);

//example
// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const exerciseName = document.querySelector('#exercise-name').value.trim();
//     const exerciseTime = document.querySelector('#exercise_time').value.trim();
 
//     if (exerciseName && exerciseTime) {
//       const response = await fetch(`/api/exercise`, {
//         method: 'POST',
//         body: JSON.stringify({ exerciseName, exerciseTime }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/workout');
//       } else {
//         alert('Failed to track activity');
//       }
//     }
//   };
  
//   document
//     .querySelector('.track-exercise-form')
//     .addEventListener('submit', newFormHandler);