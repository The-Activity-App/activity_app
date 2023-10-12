/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("places", (table) => {
    table.increments("id").primary();
    table.string("biz_id").notNullable();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("type").notNullable();
    table.string("working_hours");
    table.string("number");
    table.string("price_level");
    table.string("rating");
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.string("emoji_rating").notNullable();
    table.boolean("is_favorited").notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("places");
};
