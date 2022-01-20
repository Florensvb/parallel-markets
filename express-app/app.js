// Load environment variables
require('dotenv').config({path: './.env.local'});

const Users = require('./models/users');

// Create express.js server
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Initialise formidable
const formidable = require('express-formidable');
app.use(formidable());

app.post('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_URL || 'http://localhost:3000');

  try {
    const user = await Users.createInstance({...req.fields, file: req.files.file.path});
    res.send(user);
  } catch (e) {
    console.error(e);
    // Assuming it's the user's fault. Should split between sequelize errors and 5xx
    res.status(422).send(e);
  }
});

app.listen(port, () => {
  console.log(`Parallelmarkets API listening at http://localhost:${port}`);
});