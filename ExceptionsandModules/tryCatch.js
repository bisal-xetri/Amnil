try {
  let result = 10 / 0;
  console.log(result);

  let name = undefined;
  console.log(name.length);
} catch (error) {
  console.log("An error occurred:", error.message);
}

console.log("Code continues...");

//finally example
try {
  let numbers = [1, 2, 3];
  console.log(numbers[5].toString());
} catch (error) {
  console.log("Oops! Something went wrong:", error.message);
} finally {
  console.log("This will always run, error or not.");
}

//Custom Error Throwing
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    console.log(a / b);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

divide(10, 2);
