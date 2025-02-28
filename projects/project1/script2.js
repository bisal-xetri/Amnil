const products = [
  {
    name: "Sony Playstation 5",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/gamingconsole/5/n/u/-original-imaghyykrhvewh4y.jpeg?q=90&crop=false",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/05/Samsung-Galaxy-M15-5G-Light-blue.jpg",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "https://www.dpreview.com/files/p/articles/0737351956/EOSM200_Beauty_Blue.jpeg",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "https://www.eoshd.com/wp-content/uploads/2014/11/a7-ii-front-1200x900.jpg",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "https://www.lg.com/np/images/tvs/features/LG302_ProductPage_FeatureStrip_SuperUHD_Mobile_v2.jpg",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "https://metapod.com/cdn/shop/products/nintendo-switch-console-oled-model-blue-red-31623448625348_ae8b4b92-3071-47fe-bd25-7a79566540cd.png?v=1736497377&width=1280",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2ibJXQ-EPlOh8MwPpL5jtC07XTlmnCNeGQ&s",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "https://www.merlinstv.com/cdn/shop/files/798492_1_800x.jpg?v=1712081173",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "https://www.att.com/scmsassets/global/devices/phones/google/google-pixel-8a/carousel/obsidian-1.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "https://m.media-amazon.com/images/I/81+iBruhatL.jpg",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "https://www.abanista.com/wp-content/uploads/2022/11/toshiba-43.webp",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 16",
    url: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg",
    category: "smartphones",
    price: 999.99,
  },
];

// Selecting Dom Element
const productsWrapper = document.getElementById("products-wrapper");
const checkboxes = document.querySelectorAll(".check");
const filtersContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

// init cart item count
let cartItemCount = 0;

//init product element array
const productElements = [];

//event listeners for filtering
filtersContainer.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);
//loop over products and create an element
products.forEach((product) => {
  const productElement = createProductElement(product);
  productElements.push(productElement);
  productsWrapper.appendChild(productElement);
});

//create product element
function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className = "item space-y-2";
  productElement.innerHTML = `
    
              <div
                class="bg-gray-100 flex h-60 justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
              >
                <img
                  src="${product.url}"
                  alt="${product.name}"
                  class="w-full h-full object-cover"
                />
                <button
                  class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
                >
                  Add To Cart
                </button>
              </div>
              <p class="text-xl">${product.name}</p>
              <strong>Rs.${product.price.toLocaleString()}</strong>
          
      `;

  productElement.querySelector(".status").addEventListener("click", updateCart);

  return productElement;
}

//Add or remove items from cart
function updateCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains("added")) {
    //remove from cart
    statusEl.classList.remove("added");
    statusEl.innerText = "Add To Cart";
    statusEl.classList.remove("bg-red-500");
    statusEl.classList.add("bg-gray-800");
    cartItemCount--;
  } else {
    //add to cart
    statusEl.classList.add("added");
    statusEl.innerText = "Remove from cart";
    statusEl.classList.remove("bg-gray-800");
    statusEl.classList.add("bg-red-500");
    cartItemCount++;
  }
  //update cart item count
  cartCount.innerText = cartItemCount.toString();
  console.log(cartCount);
}

//filter products by check boxes and search input
function filterProducts() {
  //get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  //get checked category
  const checkCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);
  console.log(checkCategories);
  //loop over products and check for matches
  productElements.forEach((productElements, index) => {
    const product = products[index];

    //check to see if the product matches search or the checked categories
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkCategories.length === 0 ||
      checkCategories.includes(product.category);
    //show or hide product based on matches
    if (matchesSearchTerm && isInCheckedCategory) {
      productElements.classList.remove("hidden");
    } else {
      productElements.classList.add("hidden");
    }
  });
  console.log(checkCategories);
}
