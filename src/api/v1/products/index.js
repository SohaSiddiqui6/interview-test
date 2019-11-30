const routes = require("express").Router();
const productController = require("./products.controller");

routes.get("/", productController.getProducts);
routes.post("/", productController.createProducts);
routes.put("/:productId", productController.updateProducts);
routes.delete("/:productId", productController.deleteProducts);

module.exports = routes;
