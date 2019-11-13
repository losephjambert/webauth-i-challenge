const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const sessionConfig = require('./configure-cookies.js');

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
