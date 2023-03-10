const express = require('express');
const router = express.Router();

// GET route for the question forms page
router.get('/questionforms', (req, res) => {
  res.render('questionforms', {
    title: 'Question Forms'
    // Add any additional data to be passed to the view here
  });
});

// POST route for submitting the question forms
router.post('/questionforms', (req, res) => {
  // Handle form submission and redirect to workout page
  res.redirect('/workout');
});

module.exports = router;