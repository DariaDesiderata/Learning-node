function sum(arr) {
var result = 0;
  for(var i = 2; i < arr.length; i++){
    result+=(+arr[i]);
  }
return result;
}

console.log(sum(process.argv));
