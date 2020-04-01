const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "JoshDev";
let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database created by ${dbName}`);
});
