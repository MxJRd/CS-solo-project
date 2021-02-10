const express = require('express');
const path = require('path'); // NEW

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  console.log(`Endpoint: '/' being reached.`);
  res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
