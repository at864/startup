const config = require('./.config/git/ignore/dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
