// Get references to DOM elements
const date = document.getElementById("date");
const money = document.getElementById("amount");
const dropDown = document.querySelectorAll("#fromDropdown");
const btn = document.querySelector("#btn");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Function to populate dropdowns with currency options
for (let select of dropDown) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "NPR") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "USD") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  // Add event listener to update flag when dropdown selection changes
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Function to fetch exchange rate data from the API
const fetchExchangeRateData = async (dateValue, fromCurrency, toCurrency) => {
  const URL = `https://${dateValue}.currency-api.pages.dev/v1/currencies/${fromCurrency.toLowerCase()}.json`;
  let response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let data = await response.json();
  return data;
};

// Function to update the exchange rate and display the result
const updateExchangeRate = async () => {
  let amtVal = money.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    money.value = "1";
  }

  // Ensure date input field's max attribute is set to today's date
  const today = new Date().toISOString().split("T")[0];
  date.setAttribute("max", today);

  // Get and validate the date value
  let dateValue = date.value;
  if (dateValue > today || dateValue === "") {
    dateValue = today;
    date.value = today;
  }
  let validDate = dateValue.split("T")[0];

  try {
    // Fetch exchange rate data
    let data = await fetchExchangeRateData(validDate, from.value, to.value);

    // Calculate the final amount
    let finalAmount = (
      data[from.value.toLowerCase()][to.value.toLowerCase()] *
      parseInt(money.value)
    ).toFixed(2);

    // Display the result
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
  } catch (error) {
    console.error("Error fetching exchange rate data:", error);
    msg.innerText =
      "Failed to fetch exchange rate data. Please try again later.";
  }
};

// Function to update the flag image based on the selected currency
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Add event listener to the button to update the exchange rate when clicked
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Update the exchange rate when the page loads
window.addEventListener("load", () => {
  updateExchangeRate();
});
