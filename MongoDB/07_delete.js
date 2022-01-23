// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { name:"Faisal Ramzan" };
//   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });
//---------------------------------------------deleteMany()------------------
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result + " document(s) deleted");
      db.close();
    });
  });