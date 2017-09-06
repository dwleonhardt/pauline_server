
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scheduled_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('scheduled_items').insert([
        {
          id: 1,
          daily_item_id: 2,
          start_time: new Date ('2017-09-04T06:30:00.000Z'),
          end_time: new Date ('2017-09-04T06:00:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 2,
          daily_item_id: 3,
          start_time: new Date ('2017-09-04T12:30:00.000Z'),
          end_time: new Date ('2017-09-04T12:40:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 3,
          daily_item_id: 1,
          start_time: new Date ('2017-09-04T01:30:00.000Z'),
          end_time: new Date ('2017-09-04T01:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        },
        {
          id: 4,
          daily_item_id: 2,
          start_time: new Date ('2017-09-05T06:30:00.000Z'),
          end_time: new Date ('2017-09-05T06:00:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 5,
          daily_item_id: 3,
          start_time: new Date ('2017-09-05T12:30:00.000Z'),
          end_time: new Date ('2017-09-05T12:40:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 6,
          daily_item_id: 1,
          start_time: new Date ('2017-09-05T01:30:00.000Z'),
          end_time: new Date ('2017-09-05T01:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        },
        {
          id: 7,
          daily_item_id: 2,
          start_time: new Date ('2017-09-06T06:30:00.000Z'),
          end_time: new Date ('2017-09-06T06:00:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 8,
          daily_item_id: 3,
          start_time: new Date ('2017-09-06T12:30:00.000Z'),
          end_time: new Date ('2017-09-06T12:40:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 9,
          daily_item_id: 1,
          start_time: new Date ('2017-09-06T01:30:00.000Z'),
          end_time: new Date ('2017-09-06T01:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        },
        {
          id: 10,
          daily_item_id: 2,
          start_time: new Date ('2017-09-07T06:30:00.000Z'),
          end_time: new Date ('2017-09-07T06:00:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 11,
          daily_item_id: 3,
          start_time: new Date ('2017-09-07T12:30:00.000Z'),
          end_time: new Date ('2017-09-07T12:40:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 12,
          daily_item_id: 1,
          start_time: new Date ('2017-09-07T01:30:00.000Z'),
          end_time: new Date ('2017-09-07T01:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        },
        {
          id: 13,
          daily_item_id: 2,
          start_time: new Date ('2017-09-09T06:30:00.000Z'),
          end_time: new Date ('2017-09-09T06:00:00.000Z'),
          notes: 'He did not want to eat his vegitables'
        },
        {
          id: 14,
          daily_item_id: 3,
          start_time: new Date ('2017-09-09T12:30:00.000Z'),
          end_time: new Date ('2017-09-09T12:40:00.000Z'),
          notes: 'Asked about Pauline',
        },
        {
          id: 15,
          daily_item_id: 1,
          start_time: new Date ('2017-09-09T01:30:00.000Z'),
          end_time: new Date ('2017-09-09T01:30:00.000Z'),
          notes: 'Said he would call you guys tomorrow',
        },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('scheduled_items_id_seq', (SELECT MAX(id) FROM scheduled_items))");
    });
};
