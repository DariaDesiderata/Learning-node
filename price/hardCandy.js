var candy = require('./candyPrice.json')
module.exports.logPrice = function() {
  console.log(candy.hardCandy.name +": " + candy.hardCandy.price);
}
