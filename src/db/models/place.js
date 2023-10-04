const knex = require('../knex');

//Define CRUD interface
class Place {
    constructor({ name }){
        this.place_id = id;
        this.name = name;
    }
    //In order to see all places favorited by the user
    static async read(user_id){
        try{
            const results = await knex.raw(`SELECT * FROM favorites WHERE user_id=?`, [user_id]);
            return results.rows;
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async favorite(){

    }

    // static async search(){

    // }
}

module.exports = Place;