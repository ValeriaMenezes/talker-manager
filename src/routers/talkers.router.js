const express = require('express');

const { getAllTalkers, writeFile } = require('../fsUtils');

const talkerRouter = express.Router();

const validateToken = require('../middlewares/talker/validateToken');
const validateName = require('../middlewares/talker/validateName');
const validateAge = require('../middlewares/talker/validateAge');
const validateTalk = require('../middlewares/talker/validateTalk');
const validateWatchedAt = require('../middlewares/talker/validateWatchedAt');
const validateRate = require('../middlewares/talker/validateRate');

talkerRouter.get('/talker', async (req, res) => {
  const talkers = await getAllTalkers();
  return res.status(200).json(talkers);
});

talkerRouter.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkers();
  const filterById = talkers.find((talker) => talker.id === Number(id));
    if (!filterById) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(filterById);
});

talkerRouter.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  const addNewTalker = await writeFile(req.body);
  return res.status(201).json(addNewTalker);
});

module.exports = talkerRouter;
