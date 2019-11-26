const appRouter = (app, fs) => {

  // variables
  const dataPath = './data/products.json';
  
  
  // READ for products
  app.get('/products', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
  
          res.send(JSON.parse(data));
      });
  });
  };
  
  module.exports = appRouter;