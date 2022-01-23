var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});