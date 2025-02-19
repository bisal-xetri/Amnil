let date = new Date();
console.log(typeof date);
console.log(date.toString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

let newdate = new Date("2023-01-28");
console.log(newdate.toLocaleString());

let timeStamp = Date.now();
console.log(Math.floor(timeStamp / 1000));
// console.log(newdate.getTime());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getTime());
console.log(date.getHours());

console.log(
  date.toLocaleString("default", {
    weekday: "long",
  })
);
