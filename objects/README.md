# JavaScript Objects

## Introduction

In JavaScript, an object is a collection of key-value pairs. Objects allow you to store and organize data efficiently.

## Creating an Object

There are multiple ways to create objects in JavaScript:

### 1. Using Object Literal

```javascript
const person = {
  name: "Bishal",
  age: 22,
  city: "Kathmandu",
};
console.log(person.name); // Output: Bishal
```

### 2. Using `new Object()`

```javascript
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log(car.model); // Output: Camry
```

### 3. Using Constructor Function

```javascript
function Animal(name, species) {
  this.name = name;
  this.species = species;
}
const dog = new Animal("Buddy", "Dog");
console.log(dog.name); // Output: Buddy
```

### 4. Using Object.create()

```javascript
const prototypeObj = {
  greet: function () {
    console.log("Hello!");
  },
};
const obj = Object.create(prototypeObj);
obj.greet(); // Output: Hello!
```

## Accessing Object Properties

You can access object properties using:

- **Dot Notation**: `object.property`
- **Bracket Notation**: `object["property"]`

```javascript
console.log(person.name); // Output: Bishal
console.log(person["age"]); // Output: 22
```

## Adding and Updating Properties

```javascript
person.country = "USA"; // Adds a new property
person.age = 35; // Updates an existing property
```

## Deleting Properties

```javascript
delete person.city;
console.log(person.city); // Output: undefined
```

## Object Methods

Objects can have functions as properties, called methods.

```javascript
const user = {
  name: "Alice",
  greet: function () {
    return "Hello, " + this.name;
  },
};
console.log(user.greet()); // Output: Hello, Alice
```

## Looping Through Objects

Use `for...in` to loop through object properties.

```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

## Object Destructuring

Destructuring allows extracting values from an object.

```javascript
const { name, age } = person;
console.log(name, age);
```

## Object Spread Operator

You can use the spread operator to clone or merge objects.

```javascript
let person = {
  name: "Sijan",
  age: 22,
};

let details = {
  city: "Kathmandu",
  isStudent: true,
};

let merged = { ...person, ...details };
console.log(merged);
// Output: { name: 'Sijan', age: 22, city: 'Kathmandu', isStudent: true }
```

## `Object.freeze()` and `Object.seal()`

`Object.freeze()` prevents any changes to an object.
`Object.seal()` prevents adding or deleting properties but allows modifying existing ones.

```javascript
let person = {
  name: "Sashank",
  age: 21,
};

Object.freeze(person);
person.age = 30; // This change will not take effect
console.log(person); // Output: { name: 'Sashank', age: 21 }

Object.seal(person);
person.age = 30; // This change will take effect
person.city = "Gorkha"; // This addition will not take effect
console.log(person); // Output: { name: 'Sashank', age: 30 }
```

## Conclusion

Objects are fundamental in JavaScript, allowing for structured data management. Understanding their creation, manipulation, and methods is essential for efficient coding.
