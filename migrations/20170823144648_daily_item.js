
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('daily_items', (table) => {
    table.increments('id').primary().unsigned();
    table.string('title', 225).notNullable();
    table.string('instructions', 500);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('daily_items');
};
