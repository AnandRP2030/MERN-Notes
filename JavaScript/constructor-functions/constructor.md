In JavaScript, constructor functions are used to create and initialize objects. They serve as blueprints for creating multiple instances of similar objects. Constructor functions are invoked with the `new` keyword, which creates a new object and sets `this` to refer to that object within the function. Here's a simple explanation along with examples:

### Constructor Function Syntax:

```javascript
function MyClass(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
  this.method = function() {
    console.log('Method called');
  };
}
```

### Example 1: Creating an Instance using Constructor Function

```javascript
// Creating an instance of MyClass
var myObject = new MyClass('value1', 'value2');

// Accessing properties and methods of the instance
console.log(myObject.property1); // Output: value1
console.log(myObject.property2); // Output: value2
myObject.method(); // Output: Method called
```

### Example 2: Constructor Functions with Prototypes

Using prototypes allows you to share methods among all instances of the constructor function, which is more memory-efficient.

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the prototype
Car.prototype.drive = function() {
  console.log('Vroom!');
};

// Creating instances of Car
var car1 = new Car('Toyota', 'Camry');
var car2 = new Car('Honda', 'Accord');

// Accessing properties and methods
console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Accord
car1.drive(); // Output: Vroom!
car2.drive(); // Output: Vroom!
```

Using constructor functions and prototypes is a common pattern in JavaScript for creating reusable and efficient code. However, with the introduction of ES6, the `class` syntax was introduced, providing a more concise and readable way to achieve similar results. Constructor functions and classes serve similar purposes in creating objects with properties and methods.