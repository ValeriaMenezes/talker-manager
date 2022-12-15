const express = require('express');

const generateToken = require('../middlewares/generateToken');
const emailValidation = require('../middlewares/login/emailValidation');
const passwordValidation = require('../middlewares/login/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = loginRouter;