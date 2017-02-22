//create a constructor function that creates an array of events
function Emitter () {
  this.events = {};
}

//then define some methods for that prototype. On menthod will create a
// key name (type or an event) and a value (listener). Values will be stored in an array
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}


//emit method will check the object for a specific type of event,
// and will loop through each function and execute it
Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(function(listener){
      listener();
    })
  }
}

module.exports = Emitter;
