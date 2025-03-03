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
// const user = userInfo;//reference copy only
// console.log(user);
// user.name = "ram";
const userInfo2 = { ...userInfo }; //same as Object.assign({},userInfo)
// console.log(userInfo2);

userInfo2.name = "Bibek Dhakal";
// console.log(userInfo2);
// console.log(userInfo);

userInfo2.contact.email = "bibek@gmail.com"; //whenever we changed nested object here original  object value aslo changed because nested object copy reference onlyS
console.log(userInfo2);
console.log(userInfo);
