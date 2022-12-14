const express = require('express');

const { getAllTalkers } = require('../fsUtils');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
  const talkers = await getAllTalkers();
  return res.status(200).json(talkers);
});

module.exports = talkerRouter;
