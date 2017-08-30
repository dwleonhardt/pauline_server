
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scheduled_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('scheduled_items').insert([
        {
          id: 4,
          daily_item_id: 2,
          start_time: new Date ('2017-08-29T02:30:00.000Z'),
          end_time: new Date ('2017-08-29T03:30:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 5,
          daily_item_id: 3,
          start_time: new Date ('2017-08-29T07:30:00.000Z'),
          end_time: new Date ('2017-08-29T08:30:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 6,
          daily_item_id: 1,
          start_time: new Date ('2017-08-29T06:30:00.000Z'),
          end_time: new Date ('2017-08-29T07:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('scheduled_items_id_seq', (SELECT MAX(id) FROM daily_items))");
    });
};
