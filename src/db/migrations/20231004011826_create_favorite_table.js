/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    table.string("biz_id").notNullable();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("type").notNullable();
    table.string("working_hours");
    table.string("number");
    table.string("price_level");
    table.string("rating");
    table.boolean("is_favorited");
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.string("emoji_rating").notNullable();
    // table.foreign("user_id").references("id").inTable("users");
    // table.foreign("google_id").references("g_id").inTable("places");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("favorites");
};
