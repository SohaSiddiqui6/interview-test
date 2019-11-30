const collectionService = require("./services/collections.service");

const bootstrap = () => {
  collectionService.populate();
};

module.exports = bootstrap;
