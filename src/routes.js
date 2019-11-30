const productsRouter = require("./api/v1/products");
const collectionRouter = require("./api/v1/collections");
const routes = require("express").Router();

routes.use("/products", productsRouter);
routes.use("/collections", collectionRouter);
module.exports = routes;
