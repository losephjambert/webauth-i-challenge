const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');

router.get('/', (req, res) => {
  res.status(200).json({ api: `Now coming to you live from the api` });
});

router.use('/auth', authRouter);

module.exports = router;
