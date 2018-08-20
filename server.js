const path    = require('path');
const express = require('express');
const data    = require('./src/repository')
const app     = express();


const BASE_PATH = path.join(__dirname, './src');
const PORT      = 3000;

app.use(express.static(BASE_PATH));




//handles requests
app.get('/', (req, res) =>
  res.sendFile(path.join(BASE_PATH, "./index.html"))
);

app.get('/items.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


//small section for error handling
//404 error to handle incorrect routes. Executes next method and passes the error with it
app.use((req, res, next) => {
  const err = new Error('Page not found');
  error.status = 404;
  next(error);
})

// handles errors in the app
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

app.listen(PORT, () => console.log(`navigate to: localhost:${PORT}`))
