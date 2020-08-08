const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
    .createTable('guides', tbl => {
      tbl.increments();
      tbl.text('guideName').notNullable().unique();
    })
    .createTable('tips', tbl => {
      tbl.increments();
      tbl.integer('guides_id').unsigned().notNullable().references('id').inTable('guides').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.text('name').notNullable();
      tbl.text('num').notNullable();
      tbl.text('info01').notNullable();
      tbl.text('info02');
      tbl.text('info03');
      tbl.text('info04');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('guides')
    .dropTableIfExists('tips');
};
