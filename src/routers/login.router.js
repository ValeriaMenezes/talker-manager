const express = require('express');

const generateToken = require('../middlewares/generateToken');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = loginRouter;