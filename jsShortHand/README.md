# JavaScript Shorthand Techniques

## 1. Object Property Shorthand

```js
let fName = "Bishal";
let age = 22;
let person = { fName, age }; // Instead of { name: name, age: age }
console.log(person);
```

## 2. Shorthand Method Definition

```js
let user = {
  fName: "Bishal",
  greet() {
    console.log(`Hello, ${this.fName}!`);
  },
};
user.greet(); // Hello, Bishal!
```

## 3. Ternary Operator (Shorthand for if...else)

```js
let age1 = 20;
let status1 = age1 >= 18 ? "Adult" : "Minor";
console.log(status1); // "Adult"
```

## 4. Logical AND (&&) for Short Conditional Execution

```js
let isLoggedIn = true;
isLoggedIn && console.log("Welcome!");
```

## 5. Logical OR (||) for Default Values

```js
let username = "";
let displayName = username || "Guest";
console.log(displayName); // "Guest"
```

## 6. Nullish Coalescing (??) for Safer Defaults

```js
let points = 0;
let score = points ?? 10;
console.log(score); // 0
```

## 7. Arrow Function (Shorthand for Functions)

```js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

## 8. Short-circuiting with && and ||

```js
let user1 = { name: "Bishal" };
console.log(user1.name && "User exists");
let username1 = "";
console.log(username1 || "Guest");
```

## 9. Optional Chaining (?.)

```js
let user2 = { profile: { age: 22 } };
console.log(user2.profile?.age);
console.log(user2.address?.city); // undefined
```

## 10. Destructuring Shorthand

```js
const person1 = { name: "Ram", address: "Kathmandu" };
const { name, address } = person1;
console.log(name, address);
```

## 11. Array Destructuring

```js
const colors = ["red", "blue", "green"];
const [first, second] = colors;
console.log(first, second);
```

## 12. Template Literals

```js
const name3 = "John";
const message = `Hello, ${name3}! Welcome.`;
console.log(message);
```

## 13. Spread Operator (...)

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);
const user3 = { name: "Bishal" };
const user4 = { age: 22 };
const mergedUser = { ...user3, ...user4 };
console.log(mergedUser);
```

## 14. Rest Operator (...)

```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));
```

## 15. Converting a String to a Number

```js
const str = "42";
const num = +str;
console.log(num);
```

## 16. Swapping Variables Without a Temp Variable

```js
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);
```

## 17. Converting an Object to an Array

```js
const userInfo = { name: "Sijan", age: 23 };
console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));
console.log(Object.entries(userInfo));
```

## 18. Flatten a Nested Array

```js
const arr1 = [1, [2, 3], [4, [5, 6]]];
console.log(arr1.flat(Infinity));
```

## 19. Removing Duplicates from an Array

```js
const arr3 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr3)];
console.log(uniqueArr);
```

## 20. Convert a Boolean to a Number

```js
const isActive = true;
console.log(+isActive);
console.log(+false);
```

## 21. Loop Through an Object

```js
const person3 = { name: "Bishal", age: 40 };
for (let [key, value] of Object.entries(person3)) {
  console.log(`${key}: ${value}`);
}
```

## 22. Convert a String to an Array

```js
const str1 = "hello";
console.log([...str1]);
```

## 23. Shuffle an Array (Fisher-Yates Algorithm)

```js
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffle([1, 2, 3, 4, 5]));
```
