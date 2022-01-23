var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log("Host is ==>",q.host); //returns 'localhost:8080'
console.log("Our Path is===>",q.pathname); //returns '/default.htm'
console.log("returns ==>",q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log("years is===>",qdata.year); //returns 'february'