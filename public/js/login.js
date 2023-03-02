
const loginFormHandler = async (event) => {
    console.log("Passing through login form");
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector('#username_login').value.trim();
    const password = document.querySelector('#password_login').value.trim();
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    console.log("Passing through sign up form");
    event.preventDefault();
    const username = document.querySelector('#username_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);