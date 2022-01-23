var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Canyon 123" };
  var newvalues = { $set: {name: "Ahad Saleem",regNo:"456CE234"} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});