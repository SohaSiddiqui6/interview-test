const routes = require("express").Router();
const collectionController = require("./collections.controller");

routes.get("/", collectionController.getCollections);
routes.post("/", collectionController.createCollections);
routes.put("/:collectionId", collectionController.updateCollections);
routes.delete("/:collectionId", collectionController.deleteCollections);

module.exports = routes;
