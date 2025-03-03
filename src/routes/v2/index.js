const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({msg: 'Hello from v2'});
});

module.exports = router;