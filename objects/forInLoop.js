//Iterates over keys (property names) of an object or array.
// With an object
const person = { name: "Ram", age: 30 };
for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

// With an array
const arr = [5, 6, 7];
for (const key in arr) {
  console.log(key);
}

//iterating over nested object
const student = {
  name: "Asim",
  age: 22,
  address: {
    tempraryAddress: "Kathmandu",
    permanentAddress: "Gorkha",
  },
};
for (const key in student) {
  let value = student[key];
  if (typeof value === "object") {
    for (let k in value) {
      console.log(`${k} : ${value[k]}`);
    }
  } else {
    console.log(`${key} : ${value}`);
  }
}
