// const trackActivity = async (e) => {
//   console.log
//   e.preventDefault();
//   const Data = document.querySelector('submit').value.trim();
//   const response = await fetch('/api/exercises',{
//     method: 'POST',
//     body: JSON.stringify({title,text}),
//     headers: {'Content-Type': 'application/json'}
//   });




//   if(response.okay){
//     document.location.replace('exercisesAll');
//   } else{
//     alert(response.statusText);
//   }
// }

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