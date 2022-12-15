const fs = require('fs').promises;
const { join } = require('path');

// const pathJSON = path.resolve(__dirname, './talker.json');

const readFile = async () => {
  try {
    const readTalkers = await fs.readFile(join(__dirname, './talker.json'), 'utf-8');
    return JSON.parse(readTalkers);
  } catch (error) {
    return [];
  }
};

const getAllTalkers = async () => {
  const allTalkers = await readFile();
  return allTalkers;
};

const writeFile = async (req) => {
  const allTalkers = await readFile();
  const newTalker = {
    id: allTalkers.length + 1,
    ...req,
  };

  allTalkers.push(newTalker);
  await fs.writeFile(join(__dirname, './talker.json'), JSON.stringify(allTalkers, null, 2));
  return newTalker;
};

const editTalker = async (talkerId, info) => {
  const allTalkers = await readFile();
  const index = allTalkers.findIndex((talker) => talker.id === Number(talkerId));

  allTalkers[index] = {
    id: Number(talkerId),
    ...info,
  };

  await fs.writeFile(join(__dirname, './talker.json'), JSON.stringify(allTalkers, null, 2));

  return allTalkers[index];
};

module.exports = {
  getAllTalkers,
  writeFile,
  editTalker,
};
