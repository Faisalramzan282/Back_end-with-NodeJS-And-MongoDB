// var http = require('http');

// var courses=[{id:1,course:"CS"},{id:2,course:"node"}];
// var users=['userA','userB'];

// var server=http.createServer(function(request,response){
//     console.log("Got a request ==>",request);
//     if(request.url=="courses/reg"){
//         response.write(JSON.stringify(courses));
//         response.end;

//     }
//     else{
//         response.write("Hello World")
//     }
// }).listen(3001)
//--------------------------------------------
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//-------------------------------------------------------------------
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('My name is Faisal Ramzan');
//   res.end();
// }).listen(8081);
//----------------------------------------------------------------------
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(3001);   //When i enter summer/eneter in browser


