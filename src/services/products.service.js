const dataServiceFactory = require("./data.service");
const dataService = dataServiceFactory("data/products.json");
//const productObjectFactory = require("./../Product.model")

let products = [];

const add = product=> {
  products.push(product);
  dataService.persist(products);
};

const update = (productId, updatedProduct) => {
  products = products.map(product => {
    if (product.id === productId) {
      return {
        id: product.id,
        ...updatedProduct
      };
    }
    return products;
  });
  dataService.persist(products);
};

const remove = productId => {
  products = products.filter(
    product => product.id !== productId
  );
  dataService.persist(products);
};

const populate = () => {
  const productsFromFile = dataService.read();
  products.push(...collectionsFromFile);
};

const getAll = () => {
  const obj = dataService.read(products)
  const keysArray = Object.keys(obj);
  for (const i = 0; i < keysArray.length; i++) {
     const key = keysArray[i]; // here is "name" of object property
     const value = obj[key]; 
     return {key, value};
};
}

module.exports = {
  add,
  remove,
  update,
  populate,
  getAll
};
