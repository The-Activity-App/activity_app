const addPlace = require("./add-place");
const listPlace = require("./list-place");
const listAllFavorites = require("./list-all-favorites");



const listFavorite = require("./read-favorite");
const removeFavorite = require("./remove-favorite");
const sendUpdate = require("send-update");
const requestUpdate = require("request-update");

module.exports = {
  addPlace,
  readFavorite,
  listAllFavorites,
  removeFavorite,
  sendUpdate,
  requestUpdate,
};
