const knex = require("knex");

require("dotenv").config();

const config = require("../knexfile.js");


module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('guides');
  }
  
  function findById(id) {
    return db('guides').where({ id: Number(id) });
  }
  
  function insert(guide) {
    return db('guides')
      .insert(guide, 'id')
      .then(ids => ({ id: ids[0] }));
  }
  
  function update(id, guide) {
    return db('guides')
      .where('id', Number(id))
      .update(guide);
  }
  
  function remove(id) {
    return db('guides')
      .where('id', Number(id))
      .del();
  }

