// Real-World Example: Online Shopping Discount System
// Imagine you're running an e-commerce site where users get discounts based on their total purchase amount.
let totalAmount = 1200;
let isMember = true;

if (totalAmount >= 1000 && isMember) {
  console.log("You get a 20% discount!");
} else if (totalAmount >= 1000 || isMember) {
  console.log("You get a 10% discount!");
} else {
  console.log("No discount available.");
}
