const productService = require("./../../../services/products.service");

const getProducts = (req, res) => {
  const products = productService.getAll();
  res.status(200) .json({ status: "OK", products, count: products.length });;
};

const createProducts = (req, res) => {
  productService.add(req.body);
  res.status(200).json({ status: "OK" });
};

const updateProducts = (req, res) => {
  const { productId } = req.params;
  productService.update(productId, req.body);
  res.status(200).json({ status: "OK", productId });
};

const deleteProducts = (req, res) => {
  const { productId } = req.params;
  productService.remove(productId);
  res.status(200).json({ status: "OK", productId });
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts
};
