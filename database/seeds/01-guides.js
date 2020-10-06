
exports.seed = function(knex, Promise) {
  return knex('guides').truncate()
    .then(function () {
      return knex('guides').insert([
        { guideName: 'Basics' },
        { guideName: 'HTML' },
        { guideName: 'CSS' },
        { guideName: 'JS' },
        { guideName: 'React'},
        { guideName: 'Node'}
      ]);
    });
};
