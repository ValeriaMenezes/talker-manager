const express = require('express');

const generateToken = require('../middlewares/generateToken');

const loginRouter = express.Router();

loginRouter.post('/login', (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = loginRouter;