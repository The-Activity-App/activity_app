const express = require("express");
const userController = require("./controllers/user/index"); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const placeController = require("./controllers/place/index");
const addModelsToRequest = require("./middleware/add-models-to-request");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get("/users", userController.list);
Router.get("/users/:id", userController.show);
Router.get("/place/:id", placeController.listFavorite);
Router.get("/placeFavorites/:id", placeController.listAllFavorites);
Router.get("/me", userController.showMe);

Router.post("/api/search", placeController.addFavorite);
Router.post("/users", userController.create);
Router.post("/login", userController.login);

Router.delete("/logout", userController.logout);
Router.delete("/api/search", placeController.removeFavorite);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch("/users/:id", checkAuthentication, userController.update);
Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

module.exports = Router;
