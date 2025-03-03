/* The switch...case statement in JavaScript is used to execute different blocks of code based on different conditions.
 It's an alternative to multiple if...else statements and is especially useful when checking a variable against multiple values.*/
//  Real-World Example: Coffee Shop Ordering System
//  Imagine you're developing a simple ordering system for a coffee shop. Based on the customer's order, the system should display the price of the selected drink.
function getCoffeePrice(order) {
  let price;

  switch (order.toLowerCase()) {
    case "espresso":
      price = "Rs. 150";
      break;
    case "latte":
      price = "Rs. 200";
      break;
    case "cappuccino":
      price = "Rs. 180";
      break;
    case "americano":
      price = "Rs. 170";
      break;
    default:
      price = "Sorry, we don't have that drink.";
  }

  return price;
}

console.log(getCoffeePrice("Latte")); // Output: Rs. 200
console.log(getCoffeePrice("cappuccino")); // Output: Rs. 180
console.log(getCoffeePrice("tea")); // Output: Sorry, we don't have that drink.
