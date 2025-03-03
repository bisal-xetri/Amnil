//The setTimeout function in JavaScript is used to execute a piece of code or a function after a specified amount of time (in milliseconds).

function showLoading() {
  console.log("Loading...");

  setTimeout(() => {
    console.log("Loading complete!");
  });
}

showLoading();
console.log("some data");
