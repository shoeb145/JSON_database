const { readDb, writeDb } = require("./db_functions");

const obj = {
  name: "shoeb",
  age: "21",
};

// writeDb(obj);

console.log(readDb());
