// Example: Object destructuring
let person = {
  name: "Sunil",
  age: 22,
  isStudent: true,
};

let { name, age, isStudent } = person;
console.log(name);
console.log(age);
console.log(isStudent);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
//loop through an object's properties using for...in.
for (let key in person) {
  console.log(key + ": " + person[key]);
}
