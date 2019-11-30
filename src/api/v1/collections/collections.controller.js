const collectionService = require("./../../../services/collections.service");

const getCollections = (req, res) => {
  const collections = collectionService.getAll();
  res
    .status(200)
    .json({ status: "OK", collections, count: collections.length });
};

const createCollections = (req, res) => {
  collectionService.add(req.body);
  res.status(200).json({ status: "OK" });
};

const updateCollections = (req, res) => {
  const { collectionId } = req.query;
  collectionService.update(collectionId, req.body);
  res.status(200).json({ status: "OK", collectionId });
};

const deleteCollections = (req, res) => {
  const { collectionId } = req.query;
  collectionService.remove(collectionId);
  res.status(200).json({ status: "OK", collectionId });
};

module.exports = {
  getCollections,
  createCollections,
  updateCollections,
  deleteCollections
};
