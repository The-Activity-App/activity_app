const knex = require("../knex");

//Define CRUD interface
class Place {
  //add a place to the favorites table
  static async addFavorite(
    biz_id,
    name,
    address,
    city,
    state,
    type,
    working_hours,
    number,
    price_level,
    photo_url,
    website,
    rating,
    user_id,
  ) {
    try {
      const result = await knex.raw(
        `INSERT INTO favorites (   
          biz_id,
          name,
          address,
          city,
          state,
          type,
          working_hours,
          number,
          price_level,
          photo_url,
          website,
          rating,
          user_id) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        RETURNING *`,
        [
          biz_id,
          name,
          address,
          city,
          state,
          type,
          working_hours,
          number,
          price_level,
          photo_url,
          website,
          rating,
          user_id,
          emoji_rating
        ]
      );
      console.log(result);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //list a favorite
  static async listFav(favorite_id) {
    console.log(favorite_id)
    try {
      const result = await knex.raw(
        `
      SELECT * FROM favorites where id=?
      `,
        [favorite_id]
      );
      console.log(result.rows);
      return result.rows;
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
  static async removeFavorite(favorite_id, user_id) {
    try {
      const result = await knex.raw(
        `
      DELETE FROM favorites where id=? AND user_id=?
      `,
        [favorite_id, user_id]
      );
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

// const testQueries = async () => {
//   // const favorite = await Place.addPlace(1, 2, 3, 4, 5, 6, 7, 8, 1, 10, false);
//   // console.log(favorite);
//   // const listPlace = await Place.listPlace(8);
//   // console.log("im listing the place", listPlace);

//   const listingAllFavorites = await Place.listAllFavorites(1);
//   console.log("im listing favorites", listingAllFavorites);
// };
// testQueries();

module.exports = Place;
