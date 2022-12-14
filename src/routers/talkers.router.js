const express = require('express');

const { getAllTalkers } = require('../fsUtils');

const talkerRouter = express.Router();

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

module.exports = talkerRouter;
