const knex = require("../knex");

//Define CRUD interface
class Place {
  #isFavorited;

  constructor({
    id,
    g_id,
    name,
    address,
    type,
    hours,
    cost_range,
    ratings,
    is_favorited,
  }) {
    this.id = id;
    this.g_id = g_id;
    this.name = name;
    this.address = address;
    this.type = type;
    this.hours = hours;
    this.cost_range = cost_range;
    this.ratings = ratings;
    this.#isFavorited = is_favorited;
  }
  //In order to see all places favorited by the user
  static async readAllFavorites(user_id) {
    try {
      const results = await knex.raw(
        `SELECT DISTINCT id FROM favorites WHERE user_id=?`,
        [user_id]
      );
      return results.rows;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  //In order to add a favorite to the favorites table
  static async favorite(
    id,
    g_id,
    name,
    address,
    type,
    hours,
    cost_range,
    ratings,
    is_favorited
  ) {
    const query = `INSERT INTO favorites(id,
      place_id,
      g_id) VALUES (?, ?, ?) RETURNING *`;
    const args = [
      place_id,
      name,
      address,
      type,
      hours,
      cost_range,
      ratings,
      user_id,
    ];
    const { rows } = await knex.raw(query, args);
    const favorite = rows[0];
    return new Place(favorite);

    //create a favorite
    const createFavorite = async (emoji, place_id, g_id, user_id) => {
      try {
        const result = await knex.raw(
          `
        INSERT INTO favorites (emoji_rating, place_id, g_id) VALUES (?, ?, ?, ?) RETURNING *;`,
          [emoji_rating, place_id, g_id, user_id]
        );
        return result.rows[0];
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    //list a favorite
    const listPlace = async () => {
      try {
      } catch {}
    };

    //list all favorites
    const listAllFavoritesByUserId = async (user_id) => {
      try {
      } catch {}
    };

    //remove/delete a favorite
    const removeFavorite = async () => {
      try {
      } catch {}
    };
  }
}

module.exports = Place;
