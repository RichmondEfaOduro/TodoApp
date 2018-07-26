const fs        = require('fs');
const path      = require('path');
const DATA_PATH = path.join(__dirname, './data')


const data = JSON.parse(
  fs.readFileSync(path.join(DATA_PATH, 'items.json'), 'utf8')
);

module.exports = data;
