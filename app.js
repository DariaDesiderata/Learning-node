//var candyPrices = require('./price')
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log("A greeting happened")
})
console.log('Hello!');
emtr.emit('greet');
