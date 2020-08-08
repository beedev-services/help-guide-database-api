
exports.seed = function(knex, Promise) {
  return knex('guides').truncate()
    .then(function () {
      return knex('guides').insert([
        { guideName: 'Basics' },
        { guideName: 'HTML' },
        { guideName: 'CSS' },
      ]);
    });
};
