var fs = require('fs');
var path = process.argv[2];
var str = fs.readFileSync(path).toString();
var length = (str.split('\n').length)- 1;
console.log(length);
