// Example: ATM Pin Retry
let pinCorrect = false;

do {
  const enteredPin = prompt("Enter your 4-digit PIN:");
  pinCorrect = enteredPin === "1234";
} while (!pinCorrect);

console.log("Access granted 💰");
