const knex = require('../database/dbConfig.js');

module.exports = {
  find,
};
function find() {
  return knex('users').select('id', 'username');
}
