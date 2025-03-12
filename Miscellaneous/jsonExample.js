//What is JSON?
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
//  It’s easy for humans to read and write and easy for machines to parse and generate.
//  It’s widely used for exchanging data between a server and a web application or between different parts of a system.

// JSON Syntax Rules:

// Data is in key/value pairs ("key": value).
// Keys are always strings, wrapped in double quotes.
// Values can be:
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// null

const data = {
  name: "Bishal Dhakal",
  age: 22,
  isDeveloper: true,
  skills: ["JavaScript", "React", "C#"],
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};
console.log(data.name);
console.log(data.skills[0]);
//converting objects into json
const jsonString = JSON.stringify(data);
console.log(jsonString);
//example of json
const jsonData = `{
    "name": "Bishal Dhakal",
    "age": 23,
    "isDeveloper": true
  }`;

const user = JSON.parse(jsonData);
console.log(user.name);
console.log(user.age);
console.log(user.isDeveloper);

//Fetching Data from an API
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) // Parsing JSON to JS object
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
