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

const obj = JSON.parse(JSON.stringify(userInfo));
console.log(obj);

obj.contact.email = "ram@gmail.com";
console.log(obj);
console.log(userInfo);
