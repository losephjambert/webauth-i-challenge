const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: `Coming to you live from the auth-router` });
});

router.post('/register', async (req, res) => {
  const userInfo = req.body;
  const { password, username } = userInfo;

  if (password && username) {
    try {
      bcrypt.genSalt(10, async function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
          userInfo.password = hash;
          const newUser = await Users.add(userInfo);
          res.status(201).json(newUser);
        });
      });
    } catch (error) {
      res.status(500).json({ message: `Failed to register new user to database.` });
    }
  } else {
    res.status(400).json({ message: `username and password required to create account.` });
  }
});

module.exports = router;
