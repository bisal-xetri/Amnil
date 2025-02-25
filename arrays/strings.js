//Create JavaScript Strings
// Using double quotes
let greeting = "Hello, world!";

// Using single quotes
let message = "JavaScript is awesome!";

// Using backticks (template literals)
let name = "Bishal";
let intro = `My name is ${name}`;
console.log(intro);
console.log(name[1]);

//calculate the length of string we used length
console.log(intro.length);

// Strings Are Immutable:
let word = "Hello";
word[0] = "J"; // This won't change the string
console.log(word); // Output: Hello

// Converting to a String: we used toString() method
let num = 42;
let strNum = num.toString();
console.log(strNum); // Output: "42"
console.log(typeof strNum); // Output: string

//Changing Case
//toUpperCase() → Converts to uppercase.
console.log(word.toUpperCase());

//toLowerCase() → Converts to lowercase.
console.log(word.toLowerCase());

// Trimming Whitespace
const msg = " trim whitespace ";
// trim() → Removes whitespace from both ends.
console.log(msg.trim());
// trimStart() / trimLeft() → Removes whitespace from the start.
console.log(msg.trimStart());
// trimEnd() / trimRight() → Removes whitespace from the end.
console.log(msg.trimEnd());

// Extracting Parts of a String
let text = "JavaScript";
// slice(start, end) → Extracts a part of the string.
console.log(text.slice(0, 4)); // Output: "Java"
console.log(text.slice(-6)); // Output: "Script"
// substring(start, end) → Similar to slice(), but doesn’t accept negative indexes.
console.log(text.substring(0, 4)); // Output: "Java"

//Replacing Content
// replace(search, replace) → Replaces the first match.
// replaceAll(search, replace) → Replaces all matches.
let sentence = "I love JavaScript. JavaScript is fun!";
console.log(sentence.replace("JavaScript", "JS")); // Replaces first only
console.log(sentence.replaceAll("JavaScript", "JS")); // Replaces all

// // Splitting and Joining Strings
// split(separator) → Splits a string into an array.
// join(separator) → Joins array elements into a string.
let words = "apple,banana,orange";
let fruits = words.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]

let joined = fruits.join(" - ");
console.log(joined); // Output: "apple - banana - orange"

// Searching in Strings
// indexOf(search) → Returns the first index of a match.
// lastIndexOf(search) → Returns the last index of a match.
// includes(search) → Checks if a string contains a substring.
// startsWith(search) → Checks if a string starts with a substring.
// endsWith(search) → Checks if a string ends with a substring.
let text2 = "JavaScript is amazing";
console.log(text2.indexOf("is")); // Output: 11
console.log(text2.lastIndexOf("a")); // Output: 18
console.log(text2.includes("amazing")); // Output: true
console.log(text2.startsWith("Java")); // Output: true
console.log(text2.endsWith("amazing")); // Output: true

// Accessing Characters
// charAt(index) → Returns the character at a given position.
// charCodeAt(index) → Returns the Unicode of the character at a position.
// at(index) → Similar to charAt(), supports negative indexes.

console.log(text.charAt(0)); // Output: "J"
console.log(text.charCodeAt(0)); // Output: 74 (Unicode for "J")
console.log(text.at(-1)); // Output: "t" (last character)

//Repeating Strings
// repeat(n) → Repeats a string n times.
let laugh = "Ha";
console.log(laugh.repeat(3)); // Output: "HaHaHa"

// Padding Strings
// padStart(length, char) → Pads the start of the string.
// padEnd(length, char) → Pads the end of the string.
let number = "98";
console.log(number.padStart(5, "0")); // Output: "00098"
console.log(number.padEnd(5, "*")); // Output: "98***"
