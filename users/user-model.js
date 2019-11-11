const knex = require('../database/dbConfig.js');

module.exports = {
  find,
  findBy,
  add,
  findById,
};

function find() {
  return knex('users').select('id', 'username');
}

function findBy(filter) {
  return knex('users').where(filter);
}

async function add(user) {
  const [id] = await knex('users').insert(user, 'id');
  return findById(id);
}

function findById(id) {
  return knex('users')
    .select('id', 'username')
    .where({ id })
    .first();
}
