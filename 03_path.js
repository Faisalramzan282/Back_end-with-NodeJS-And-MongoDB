var path=require("path");

// console.log("Path of my direactory is==>",__filename);
// console.log("dir is==> ",__dirname);

var pathOBJ=path.parse(__filename);

console.log("Path Parse ===>",pathOBJ)