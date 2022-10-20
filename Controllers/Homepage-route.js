const router = require('express').Router();
const { Reviews, User } = require("../models");
const withAuth = require("../utils/auth");


// This is the home route 
router.get('/', async (req, res) => {
  res.render('homepage');
});



// "/pofile route check if a user if logged in with seassions "
router.get('/profile', withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
});

// check of user is logged in with sesstion if so it will take them to /profile if they are not it will go take them / login
router.get('/login',(req, res) => {
   // look for a seasion Id and denie or gran acesses based off seasson ID
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;


// try {
//   // look for a seasion Id and denie or gran acesses based off seasson ID
//   const userData = await User.findByPk(req.session.user_id, {
//   });

//   const user = userData.get({ plain: true });

//   res.render('profile', {
//     ...user,
//     logged_in: true
//   });
// } catch (err) {
//   res.status(500).json(err);
// }