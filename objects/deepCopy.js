const userInfo = {
  id: 1,
  name: "Bishal Dhakal",
  contact: {
    email: "bishal@gmail.com",
    phone: "9810041458",
    address: {
      country: "Nepal",
      city: "Kathmandu",
    },
  },
};

// const obj = JSON.parse(JSON.stringify(userInfo));
// console.log(obj);

// obj.contact.email = "ram@gmail.com";
// console.log(obj);
// console.log(userInfo);

const student1 = [
  {
    name: "Asim",
    age: 22,
    address: {
      tempraryAddress: "Kathmandu",
      permanentAddress: "Gorkha",
    },
  },
  {
    name: "Bishal",
    age: 22,
    printName: function () {
      console.log(`Welcome Bishal`);
    },
    address: {
      tempraryAddress: "Kathmandu",
      permanentAddress: "Gorkha",
    },
  },
];

for (let value of student1) {
  // console.log(value);
  for (let key in value) {
    let values = value[key];
    //  console.log(values);

    if (typeof values === "object") {
      for (let keys in values) {
        console.log(values[keys]);
      }
    } else if (typeof values === "function") {
      console.log(values());
    } else {
      console.log(values);
    }
  }
}
