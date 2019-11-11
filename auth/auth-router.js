const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: `Coming to you live from the auth-router` });
});

module.exports = router;
