//promise represent the eventual completion or failure of an asynchronous operations and its resulting value
// three state pending fulfilled and reject
// fetch("https://something.json").then().catch().finally();

const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  //db calls ,api call
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("Promise consumed");
});

//example 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    console.log("Async task 2");
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

//promise 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ram", email: "ram@gmail.com" });
  }, 1000);
});

promiseThree.then(({ username, email }) => {
  console.log(username, email);
});

//promise 4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      resolve({ username: "Bishal", password: "1234" });
    } else {
      reject("Error: something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Always executed"));

//promise 5

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      resolve({ username: "Bishal", password: "1234" });
    } else {
      reject("Error: something went wrong!");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consumedPromiseFive();

//fetch

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
