const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // const workoutData = await Workout.findAll({
    //   where: {
    //     user_id: req.session.user_id,
    //   },
    //   include: [
    //     {
    //       model: User,
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    //temp data until we done seeds data
    const workoutData= {
                          workout_name:"running",
                          difficulty_level:"hard" 
                       };
          

    // Pass serialized data and session flag into template
    res.render('workout', { 
      layout: "dashboard",
      workoutData, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// User sign up
router.get('/signup', (req, res) => {

  res.render('signup');
});

router.get('/account', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);

    const accountData = userData.get({ plain: true });


    res.render('account', { 
      layout: "dashboard",
      ...accountData,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/matrix', (req, res) => {
 
  res.render('chart', { 
    layout: "dashboard",
    logged_in: req.session.logged_in 
  });
});

module.exports = router;