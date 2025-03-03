// Real-World Example: Skipping Unavailable Items in an Online Store
// An e-commerce platform might skip unavailable items when displaying products.

let products = ["Laptop", "Phone", "Out of Stock", "Tablet", "Camera"];

for (let i = 0; i < products.length; i++) {
  if (products[i] === "Out of Stock") {
    continue; // Skip displaying this item
  }
  console.log("Available: " + products[i]);
}
