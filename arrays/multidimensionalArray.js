//  multidimensional arrays contain another array inside them
const multidimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(multidimensionalArray);

//Access Elements of an Array

console.log(multidimensionalArray[1][0]);

//Add Elements to a Multidimensional Array
//Using Index Notation
multidimensionalArray[0][0] = "Bishal";
console.log(multidimensionalArray);
//using push Method
multidimensionalArray.push(["Ram", 20]);
multidimensionalArray[1].push("Sita");
console.log(multidimensionalArray);

//using unshift(method)
multidimensionalArray.unshift(["Sijan", 22]);
console.log(multidimensionalArray);

// add element using the splice() method.
multidimensionalArray.splice(1, 0, ["Sashank", 21]);
console.log(multidimensionalArray);

//remove element using splice()
multidimensionalArray.splice(0, 1);
console.log(multidimensionalArray);

//Iterate Over Multidimensional Array
//using for loops
console.log("Output of for loops");
for (let i = 0; i < multidimensionalArray.length; i++) {
  for (let j = 0; j < multidimensionalArray[i].length; j++) {
    console.log(multidimensionalArray[i][j]);
  }
}
//using forEachLOOP
console.log("OutPut Of forEachLoops");
multidimensionalArray.forEach((outer) => {
  outer.forEach((inner) => {
    console.log(inner);
  });
});

//using forOf loop
console.log("Output of for of loop");
for (let outervalue of multidimensionalArray) {
  for (let innerValue of outervalue) {
    console.log(innerValue);
  }
}

//Write a function to flatten a nested array.
function flattenNestedArray(arr) {
  return arr.flat(Infinity);
}
const arr = [[10, 20], [30], [40, 50, 60]];
console.log(`Flatten Array : ${flattenNestedArray(arr)}`);
