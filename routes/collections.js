const appRouter = (app, fs) => {

  // variables
  const dataPath = './data/collections.json';
  
  // READ for collections
  app.get('/collections', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
  
          res.send(JSON.parse(data));
      });
  });
  
  };
  
  module.exports = appRouter;