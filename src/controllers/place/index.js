const search = require("./search");
const addFavorite = require("./add-favorite");
const readFavorite = require("./read-favorite");
const listAllFavorites = require("./list-all-favorites");
const removeFavorite = require("./remove-favorite");
const sendUpdate = require("send-update");
const requestUpdate = require("request-update");

module.exports = {
  search,
  addFavorite,
  readFavorite,
  listAllFavorites,
  removeFavorite,
  sendUpdate,
  requestUpdate,
};
