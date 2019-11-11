const router = require('express').Router();

const Users = require('./user-model.js');
const requiresAuth = require('../auth/requires-auth-middleware.js');

router.get('/', requiresAuth, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Could not retrieve users from the database`, error });
  }
});

module.exports = router;
