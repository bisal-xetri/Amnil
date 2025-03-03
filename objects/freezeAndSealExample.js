// `Object.freeze()` prevents any changes to an object.
//`Object.seal()` prevents adding or deleting properties but allows modifying existing ones.
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
console.log(person);
