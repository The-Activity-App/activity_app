const knex = require("../knex");

//Define CRUD interface
class Place {
  constructor({
    id,
    place_id,
    name,
    address,
    type,
    hours,
    cost_range,
    ratings,
  }) {
    this.id = id;
    this.place_id = place_id;
    this.name = name;
    this.address = address;
    this.type = type;
    this.hours = hours;
    this.cost_range = cost_range;
    this.ratings = ratings;
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

  static async favorite(
    place_id,
    name,
    address,
    type,
    hours,
    cost_range,
    ratings,
    user_id
  ) {
    const query = `INSERT INTO favorites(place_id, name, address, type, hours, cost_range, ratings, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`;
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
  }

  // static async search(){

  // }
}

module.exports = Place;
