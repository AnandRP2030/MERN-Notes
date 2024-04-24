const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = () => {
  console.log('An event occurred!');
};
const eventHandler2 = () => {
  console.log('An 2nd event occurred!');
};

// Register the event handler for the 'myEvent' event
// myEmitter.on('myEvent', eventHandler);
myEmitter.on("myEvent2", eventHandler2);
myEmitter.on("eventLast", eventHandler)
// Emit the 'myEvent' event
myEmitter.emit('eventLast');

// We first import the EventEmitter module from the Node.js core library.
// We create an instance of EventEmitter called myEmitter.
// We define an event handler function eventHandler which simply logs a message to the console.
// We register the event handler function to be executed when the 'myEvent' event occurs using the on() method.
// We emit (or trigger) the 'myEvent' event using the emit() method.