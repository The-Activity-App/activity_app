/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    table.integer("place_id").notNullable();
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
