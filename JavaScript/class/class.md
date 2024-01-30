In ES6 (ECMAScript 2015) and later versions of JavaScript, you can use the `class` syntax to create objects. Here's a basic example of how to create objects using the `class` keyword:

```javascript
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log('Woof!');
  }
}

// Creating instances of the Dog class
const dog1 = new Dog('Buddy', 3);
const dog2 = new Dog('Max', 5);

// Accessing properties and calling methods
console.log(dog1.name); // Output: Buddy
console.log(dog2.age);  // Output: 5
dog1.bark();            // Output: Woof!
dog2.bark();            // Output: Woof!
```

In this example, the `Dog` class has a `constructor` method for initializing properties, and it also has a `bark` method. You can create instances of the `Dog` class using the `new` keyword, similar to constructor functions.

The `class` syntax is a more concise and declarative way to define constructor functions and their prototypes. Under the hood, it still uses prototypes, but the syntax is more readable and aligns with the class-based programming paradigm.

It's important to note that despite the introduction of the `class` syntax, JavaScript remains a prototype-based language, and classes are just a syntactical sugar over the existing prototype system.