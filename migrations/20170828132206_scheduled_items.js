
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('scheduled_items', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('daily_item_id').references('id').inTable('daily_items').onDelete('CASCADE');
    table.dateTime('start_time').notNullable();
    table.dateTime('end_time');
    table.string('notes', 500);
    table.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scheduled_items');
};
