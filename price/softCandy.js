var candy = require('./candyPrice.json')
module.exports.logPrice = function() {
  console.log(candy.softCandy.name +": "+ candy.softCandy.price);
}
