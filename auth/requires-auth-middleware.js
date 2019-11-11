const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js');

module.exports = async (req, res, next) => {
  const credentials = req.headers;
  const { password, username } = credentials;

  if (password && username) {
    try {
      const user = await Users.findBy({ username });
      bcrypt.compare(credentials.password, user.password, (err, hashMatch) => {
        if (hashMatch) {
          next();
        } else {
          res.status(401).json({ message: `You. Shall. Not. Pass!` });
        }
      });
    } catch (error) {
      res.status(500).json({ message: `Failed to authenticate user with database.` });
    }
  } else {
    res.status(400).json({
      message: `I cannot attempt to grant you access without you first providing credentials.`,
    });
  }
};
