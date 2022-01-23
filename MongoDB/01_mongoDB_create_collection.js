var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});