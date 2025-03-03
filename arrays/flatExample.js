// flat() — Flattens Nested Arrays
// Purpose: Flattens a nested array into a single-level array.
// Does NOT change the original array — returns a new array.
// Default depth: Flattens one level deep, but we can control how deep it goes.
// array.flat(depth);

//Flattening one level (default)
const arr = [1, [2, 3], [4, [5, 6]]];
const flatArr = arr.flat();
console.log(flatArr);

//Flattening infinitely
const deeplyNested = [1, [2, [3, [4, [5]]]]];
const completelyFlat = deeplyNested.flat(Infinity);
console.log(completelyFlat);

//Handling empty slots
const arrWithHoles = [1, , 3, [4, , 6]];
console.log(arrWithHoles.flat());
