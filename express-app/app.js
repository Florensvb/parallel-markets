const express = require('express');
const app = express();
const port = process.env.port || 3001;
const Users = require('./models/users');

const formidable = require('express-formidable');
app.use(formidable());

app.post('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_URL || 'http://localhost:3000');

  try {
    const user = await Users.createInstance({...req.fields, file: req.files.file.path});
    res.send(user);
  } catch (e) {
    console.error(e);
    res.status(500).send('Something did not work here');
  }
});

app.listen(port, () => {
  console.log(`Parallelmarkets API listening at http://localhost:${port}`)
});