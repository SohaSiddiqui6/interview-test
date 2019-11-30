const fs = require("fs");

const dataServiceFactory = path => {
  const filePath = path;
  return {
    read: () => {
      let rawdata = fs.readFileSync(filePath);
      return JSON.parse(rawdata);
    },
    persist: data => {
      fs.writeFileSync(filePath, JSON.stringify(data));
    }
  };
};

module.exports = dataServiceFactory;
