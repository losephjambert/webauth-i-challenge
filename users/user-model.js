const knex = require('../database/dbConfig.js');

module.exports = {
  find,
  findBy,
  add,
};

function find() {
  return knex('users').select('id', 'username');
}

function findBy(filter) {
  return knex('users').where(filter);
}

function add(user) {
  return knex('users').insert(user);
}
