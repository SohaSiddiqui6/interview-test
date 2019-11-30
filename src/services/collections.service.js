const dataServiceFactory = require("./data.service");
const dataService = dataServiceFactory("data/collections.json");

let collections = [];

const add = collection => {
  collections.push(collection);
  dataService.persist(collections);
};

const update = (collectionId, updatedCollection) => {
  collections = collections.map(collection => {
    if (collection.id === collectionId) {
      return {
        id: collection.id,
        ...updatedCollection
      };
    }
    return collection;
  });
  dataService.persist(collections);
};

const remove = collectionId => {
  collections = collections.filter(
    collection => collection.id !== collectionId
  );
  dataService.persist(collections);
};

const populate = () => {
  const collectionsFromFile = dataService.read();
  collections.push(...collectionsFromFile);
};

const getAll = () => {
  return collections;
};

module.exports = {
  add,
  remove,
  update,
  populate,
  getAll
};
