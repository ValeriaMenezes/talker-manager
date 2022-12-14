const fs = require('fs').promises;
const { join } = require('path');

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

module.exports = {
  getAllTalkers,
};
