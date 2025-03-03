# JavaScript Control Flow

## 📌 Introduction
Control flow in JavaScript determines the order in which statements are executed. By using control flow statements, we can make decisions, repeat actions, and control how code is executed dynamically.

## 🚀 Topics Covered
1. JavaScript Comparison and Logical Operators
2. JavaScript `if...else` Statement
3. JavaScript `for` Loop
4. JavaScript `while` and `do...while` Loops
5. JavaScript `break` Statement
6. JavaScript `continue` Statement
7. When to Use Each Control Flow Structure

---

## 1️⃣ JavaScript Comparison and Logical Operators
### 📌 Explanation
Comparison and logical operators are used to evaluate conditions and return `true` or `false`.

### 🛠️ When to Use
- When making **decisions** based on user input
- When **validating** form data
- When checking if **conditions** are met

### 🔹 Example: Online Shopping Discount System
```javascript
let totalAmount = 1200; 
let isMember = true; 

if (totalAmount >= 1000 && isMember) {
    console.log("You get a 20% discount!");
} else if (totalAmount >= 1000 || isMember) {
    console.log("You get a 10% discount!");
} else {
    console.log("No discount available.");
}
```
---

## 2️⃣ JavaScript `if...else` Statement
### 📌 Explanation
The `if...else` statement executes different blocks of code based on conditions.

### 🛠️ When to Use
- When **executing different logic** based on conditions
- When determining **access permissions**
- When deciding **user interface changes**

### 🔹 Example: Checking Exam Results
```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else {
    console.log("Fail");
}
```
---

## 3️⃣ JavaScript `for` Loop
### 📌 Explanation
A `for` loop is used to execute a block of code multiple times.

### 🛠️ When to Use
- When iterating over **arrays or lists**
- When **executing repetitive tasks** (e.g., rendering multiple elements)
- When running a loop for a **fixed number of times**

### 🔹 Example: Countdown Timer
```javascript
console.log("Flash Sale starts in:");
for (let i = 5; i > 0; i--) {
    console.log(i + " seconds left");
}
console.log("Sale started!");
```
---

## 4️⃣ JavaScript `while` and `do...while` Loops
### 📌 Explanation
Loops execute a block of code repeatedly while a condition is true.

### 🛠️ When to Use
- When **waiting for user actions** (e.g., input validation)
- When **running processes** until a condition is met
- When **processing data dynamically**

### 🔹 Example: ATM Cash Withdrawal (while loop)
```javascript
let balance = 5000;
let withdrawalAmount = 1000;

while (balance >= withdrawalAmount) {
    console.log("Rs. " + withdrawalAmount + " withdrawn.");
    balance -= withdrawalAmount;
}

console.log("Not enough balance for another withdrawal.");
```

### 🔹 // do while loop Example: ATM Pin Retry

### 🛠️ When to Use
- When ensuring the loop body executes at least once.
- When repeatedly prompting for user input until valid data is entered.
-When the condition needs to be checked after the loop body executes.
```javascript
let pinCorrect = false;
do {
  const enteredPin = prompt("Enter your 4-digit PIN:");
  pinCorrect = (enteredPin === "1234");
} while (!pinCorrect);

console.log("Access granted 💰");
```



## 5️⃣ JavaScript `break` Statement
### 📌 Explanation
The `break` statement exits a loop when a certain condition is met.

### 🛠️ When to Use
- When **searching for specific data** in a list
- When stopping a process **once a condition is met**
- When handling **early termination of loops**

### 🔹 Example: Searching for a Customer Order
```javascript
let orders = [101, 102, 103, 104, 105];
let searchOrder = 103;

for (let i = 0; i < orders.length; i++) {
    if (orders[i] === searchOrder) {
        console.log("Order found: #" + orders[i]);
        break;
    }
}
```
---

## 6️⃣ JavaScript `continue` Statement
### 📌 Explanation
The `continue` statement skips an iteration in a loop.

### 🛠️ When to Use
- When **skipping certain values** in an array or list
- When handling **errors and exceptions** within loops
- When **processing only specific conditions** in iterations

### 🔹 Example: Skipping Out-of-Stock Items
```javascript
let products = ["Laptop", "Phone", "Out of Stock", "Tablet", "Camera"];

for (let i = 0; i < products.length; i++) {
    if (products[i] === "Out of Stock") {
        continue;
    }
    console.log("Available: " + products[i]);
}
```
---

## 📌 Summary Table
| Concept | Real-World Example | When to Use |
|---------|------------------|-------------|
| **Comparison & Logical Operators** | Online shopping discount system | Evaluating conditions and making decisions |
| **if...else Statement** | Checking student exam results | Executing different logic based on conditions |
| **for Loop** | Countdown timer for a flash sale | Iterating over lists or running a loop a fixed number of times |
| **while Loop** | ATM cash withdrawal | Running processes until a condition is met |
| **do...while Loop** |  ATM Pin Retry | Ensuring at least one execution before condition checking |
| **break Statement** | Searching for a customer order | Exiting loops when a condition is met |
| **continue Statement** | Skipping unavailable items in an online store | Skipping specific iterations in a loop |

