const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js');

router.post('/register', async (req, res) => {
  const userInfo = req.body;
  const { password, username } = userInfo;

  if (password && username) {
    try {
      bcrypt.genSalt(10, async function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
          userInfo.password = hash;
          const newUser = await Users.add(userInfo);
          req.session.username = newUser.username;
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

router.post('/login', async (req, res) => {
  const credentials = req.body;
  const { password, username } = credentials;

  if (password && username) {
    try {
      const user = await Users.findBy({ username });
      bcrypt.compare(credentials.password, user.password, (err, hashMatch) => {
        if (hashMatch) {
          req.session.username = user.username;
          res.status(200).json({ username: user.username, id: user.id, session: req.session });
        } else {
          res.status(401).json({ message: `Invalid credentials` });
        }
      });
    } catch (error) {
      res.status(500).json({ message: `Failed to authenticate user with database.` });
    }
  } else {
    res.status(400).json({ message: `user credentials required to login.` });
  }
});

module.exports = router;
