//URL of mongoDB::mongodb+srv://faisal_123:<password>@cluster0.zocdx.mongodb.net/test

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});