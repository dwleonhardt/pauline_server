
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daily_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('daily_items').insert([
        {
          id: 1,
          title: 'Breakfast',
          instructions: 'Make sure he eats vegitables',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date ('2016-06-26T14:26:16.000Z')
        },
        {
          id: 2,
          title: 'Lunch',
          instructions: 'He is allergic to mayo so be careful',
          created_at: new Date('2017-06-26T14:26:16.000Z'),
          updated_at: new Date ('2017-06-26T14:26:16.000Z')
        },
        {
          id: 3,
          title: 'Dinner',
          instructions: 'We would like to schedule our daily phone call durring this time',
          created_at: new Date('2014-06-26T14:26:16.000Z'),
          updated_at: new Date ('2014-06-26T14:26:16.000Z')
        }
      ]);
    });
};
