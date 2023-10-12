const knex = require("../knex");

//Define CRUD interface
class Place {
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
      const result = await knew.raw(`
      
      `);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //list all favorites
  static async listAllFavorites(user_id) {
    try {
      const results = await knex.raw(
        `SELECT * FROM favorites WHERE user_id=?`,
        [user_id]
      );
      return results.rows;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  //remove/delete a favorite
  static async removeFavorite(favorite_id) {
    try {
      const result = await knex.raw(`
      DELETE FROM favorites where id=?
      `)
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

const testQueries = async () => {
  const favorite = await Place.addFavorite();
  console.log(favorite);
};
testQueries();

module.exports = Place;
