const express = require('express');
const path = require('path'); // NEW
const dataStructureController = require('./controllers/dataStructureController');

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW

app.get('/', (req, res) => {
  console.log(`Endpoint: '/' being reached.`);
  res.status(200).sendFile(HTML_FILE); // EDIT
});

app.get('/bst',
  dataStructureController.getBST,
  (req, res) => {
    res.status(200).send(res.locals.getBST);
});

app.get('/stack',
  dataStructureController.getStack,
  (req, res) => {
    res.status(200).send(res.locals.getStack);
});

app.get('/queue',
  dataStructureController.getQueue,
  (req, res) => {
    res.status(200).send(res.locals.getQueue);
});


app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
