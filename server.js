const path    = require('path');
const express = require('express');
const data    = require('./src/repository')
const app     = express();


const BASE_PATH = path.join(__dirname, './src');
const PORT      = 3000;

app.use(express.static(BASE_PATH));


app.get('/', (req, res) =>
  res.sendFile(path.join(BASE_PATH, "./index.html"))
);

app.get('/items.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


app.listen(PORT, () => console.log(`navigate to: localhost:${PORT}`))
