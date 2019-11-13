const session = require('express-session')
const KnexSessionStore = require("connect-session-knex")(session);

const knexConnection = require('../database/dbConfig.js')

// create store with knex 
const store = new KnexSessionStore({
  knex: knexConnection,
  clearInterval: 1000 * 60 * 60 * 12,
  tablename: "user_sessions",
  sidfieldname: "id",
  createtable: true
});

// configure express-session middleware
const sessionConfig = {
  name: 'user-connect', // cookie name
  secret: process.env.COOKIE_SECRET || "is it secret? is it safe?", // cookie secret value
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // how long we should persist the cookie ==== 24 hours in millis
    secure: process.env.NODE_ENV === "development" ? false : true, // only set cookies over https
  },
  httpOnly: true, // don't let JavaScript code access cookies
  resave: false,
  saveUninitialized: false,
  store
}

module.exports = sessionConfig