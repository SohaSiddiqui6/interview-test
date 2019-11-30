const productObjectFactory = (id, productName, collections) => {
  return {
    id,
    product_name: productName,
    collections,
    addCollection: collection => {
      this.collections.push(collection);
    },
    removeCollection: collectionId => {
      this.collections = this.collections.filter(
        collection => collection.id !== collectionId
      );
    }
  };
};

module.exports = productObjectFactory;
