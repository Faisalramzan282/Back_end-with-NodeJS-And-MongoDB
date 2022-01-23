var os = require("os");

var TotalMemory=os.totalmem();
var FreeMemory=os.freemem();

console.log("Total memory is ==>",TotalMemory);
console.log("Free memory is ===>",FreeMemory);