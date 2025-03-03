// Real-World Example: Finding a Customer Order in a List
// Imagine an order search system where a cashier looks for a customer's order number.

let orders = [101, 102, 103, 104, 105];
let searchOrder = 103;

for (let i = 0; i < orders.length; i++) {
  if (orders[i] === searchOrder) {
    console.log("Order found: #" + orders[i]);
    break; // Stop searching after finding the order
  }
}
