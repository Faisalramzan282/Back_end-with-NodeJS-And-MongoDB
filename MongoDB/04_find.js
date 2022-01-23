// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://faisal_123:Ramzan5656@cluster0.zocdx.mongodb.net/Data";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
//--------------------------------------FindAll()--------------------------------------

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://faisal_123:Ramzan5656@cluster0.zocdx.mongodb.net/Data";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
//-------------------------------------------FindSome()----------------------
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://faisal_123:Ramzan5656@cluster0.zocdx.mongodb.net/Data";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: {} }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result._id);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://faisal_123:Ramzan5656@cluster0.zocdx.mongodb.net/Data";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://faisal_123:Password@cluster0.zocdx.mongodb.net/Data";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: {_id:"61ed732bc8902091cb924f0b"} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});