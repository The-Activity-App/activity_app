/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("places", (table) => {
    table.increments("id").primary();
    table.integer("g_id").notNullable();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("type").notNullable();
    table.string("hours").notNullable();
    table.string("cost_range").notNullable();
    table.string("ratings").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("places");
};
