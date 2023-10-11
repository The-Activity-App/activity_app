const knex = require("../knex");

//Define CRUD interface
class Place {
  #isFavorited;

  constructor({
    //
    id,
    biz_id,
    name,
    address,
    type,
    working_hours,
    number,
    price_level,
    rating,
    is_favorited,
  }) {
    this.id = id;
    this.biz_id = biz_id;
    this.name = name;
    this.number = number;
    this.address = address;
    this.type = type;
    this.working_hours = working_hours;
    this.price_level = price_level;
    this.rating = rating;
    this.#isFavorited = is_favorited;
  }

  //add a place to the favorites table
  static async addFavorite(
    biz_id,
    name,
    address,
    type,
    working_hours,
    number,
    price_level,
    rating,
    user_id
  ) {
    try {
      const result = await knex.raw(
        `INSERT INTO favorites (   
        biz_id,
        name,
        address,
        type,
        working_hours,
        number,
        price_level,
        rating,
        user_id) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?)
        RETURNING *`,
        [
          biz_id,
          name,
          address,
          type,
          working_hours,
          number,
          price_level,
          rating,
          user_id,
        ]
      );
      console.log(result);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //list a place
  static async listPlace() {
    try {
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //list all favorites
  static async listAllFavorites() {
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

  //remove/delete a favorite
  static async removeFavorite() {
    try {
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

const testQueries = async () => {
  const favorite = await addFavorite();
  console.log(favorite);
};
testQueries();

module.exports = Place;
