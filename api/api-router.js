const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ api: `Now coming to you live from the api` });
});

module.exports = router;
