const fs = require("fs");

// read database function

const readDb = (dbName = "db.json") => {
  const data = fs.readFileSync(dbName, "utf-8");
  const convertedData = JSON.parse(data);
  return convertedData;
};

// write  database function
const writeDb = (obj, dbName = "db.json") => {
  if (!obj) return;
  try {
    const convertData = JSON.stringify(obj);
    fs.writeFileSync(dbName, convertData);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  readDb,
  writeDb,
};
