const fs = require('fs').promises;
const { join } = require('path');
// const { path } = require('path');
// const { all } = require('./routers/talkers.router');

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

module.exports = {
  getAllTalkers,
  writeFile,
};
