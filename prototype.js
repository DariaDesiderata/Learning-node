function Candy(name, type) {
 this.name = name,
 this.type = type
}

var jelly = new Candy('JellyBean', 'chew')
Candy.prototype.eat = function() {
  console.log("nom, nom, nom");
}

jelly.eat();
console.log(Candy.prototype);
