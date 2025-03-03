// Real-World Example: ATM Cash Withdrawal System
// An ATM only allows withdrawal if the account has enough balance.

let balance = 5000;
let withdrawalAmount = 1000;

while (balance >= withdrawalAmount) {
  console.log("Rs. " + withdrawalAmount + " withdrawn.");
  balance -= withdrawalAmount;
}

console.log("Not enough balance for another withdrawal.");
