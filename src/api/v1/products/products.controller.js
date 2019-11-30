const getProducts = (req, res) => {
  res.status(200).json({ status: "OK" });
};

const createProducts = (req, res) => {
  res.status(200).json({ status: "OK" });
};

const updateProducts = (req, res) => {
  const { productId } = req.params;
  res.status(200).json({ status: "OK", productId });
};

const deleteProducts = (req, res) => {
  const { productId } = req.params;
  res.status(200).json({ status: "OK", productId });
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts
};
