const User = require("../db/models/user");
const Place = require("../db/models/place");

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Place,
  };
  next();
};

module.exports = addModelsToRequest;
