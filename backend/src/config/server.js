const routes = require('./routes/routes');

require('dotenv/config');

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const cors = require('cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors())

server.listen(process.env.PORT, function() {
  console.log(`BACKEND is running on port ${process.env.PORT}`);
});

module.exports = server