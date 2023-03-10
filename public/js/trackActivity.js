// document.querySelector('.track-activity')
// .addEventListener('submit', trackActivity);

const trackActivityHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();
 
    if (title && contents) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
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

