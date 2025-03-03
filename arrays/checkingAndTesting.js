//includes(): Checks if an array contains a value.
const colors = ["red", "blue", "green"];
console.log(colors.includes("blue"));

//some(): Checks if any element meets a condition.
const ages = [10, 20, 30];
const hasTeen = ages.some((age) => age < 18);
console.log(hasTeen);

//every(): Checks if all elements meet a condition.
const scores = [80, 90, 100];
const allPassed = scores.every((score) => score >= 50);
console.log(allPassed);
