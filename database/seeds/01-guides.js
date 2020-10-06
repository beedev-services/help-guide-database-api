
exports.seed = function(knex, Promise) {
  return knex('guides').del()
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
