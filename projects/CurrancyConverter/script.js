const date = document.getElementById("date");
const money = document.getElementById("amount");
const dropDown = document.querySelectorAll("#fromDropdown");
const btn = document.querySelector("#btn");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const BASE_URL = `https://www.nrb.org.np/api/forex/v1/rates?`;

// Fetch exchange rate data from the API
const fetchExchangeRateData = async (dateValue) => {
  const URL = `${BASE_URL}from=${dateValue}&to=${dateValue}&per_page=20&page=1`;
  let response = await fetch(URL);
  let data = await response.json();
  return data.data.payload[0].rates;
};

// Validate and return the selected date
function validDate() {
  const today = new Date().toISOString().split("T")[0];
  date.setAttribute("max", today);
  let newDate = date.value;

  if (newDate > today || newDate === "") {
    newDate = today;
    date.value = today;
  }
  return newDate;
}

// Function to populate dropdowns with currency options
const populateDropdowns = async () => {
  const data = await fetchExchangeRateData(validDate());
  const countryCodes = data.map((rate) => rate.currency.iso3);

  for (let select of dropDown) {
    // Clear existing options
    select.innerHTML = "";

    for (let code of countryCodes) {
      let newOption = document.createElement("option");
      newOption.innerText = code;
      newOption.value = code;
      if (select.name === "from") {
        const newOption = document.createElement("option");
        newOption.innerText = "NPR";
        newOption.value = "NPR";
        newOption.selected = "selected";
        select.appendChild(newOption);
        select.disabled = true;
      } else if (select.name === "to" && code === "USD") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }

    // Add event listener to update flag when dropdown selection changes
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
};

// Function to update the flag image based on the selected currency
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode]; // Get country code from mapping
  if (countryCode) {
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  }
};

const calculateExchangeRate = async () => {
  const amount = parseFloat(money.value);
  if (isNaN(amount) || amount < 1) {
    money.value = 1;
    alert("Please enter a valid amount.");
    return;
  }

  const data = await fetchExchangeRateData(validDate());
  const fromCurrency = from.value;
  const toCurrency = to.value;

  // Find the exchange rates for the selected currencies
  const toRate = data.find((rate) => rate.currency.iso3 === toCurrency);
  if (!toRate) {
    msg.innerText = "Currency not found.";
    return;
  }

  const toUnit = toRate.currency.unit || 1; // Default to 1 if unit is not provided

  const adjustedToRate = toRate.buy / toUnit;

  const convertedAmount = (amount * adjustedToRate).toFixed(2);

  // Display the result
  msg.innerText = `${amount} NPR  = ${convertedAmount} ${toCurrency}`;
};
//displaying exchange rate in table
const populateTable = async () => {
  const dateValue = validDate();
  const data = await fetchExchangeRateData(dateValue);
  const tbody = document.getElementById("exchange-rates");

  tbody.innerHTML = "";

  // Add a row for each currency
  data.forEach((rate) => {
    const currencyCode = rate.currency.iso3;
    const countryCode = countryList[currencyCode] || "NP";
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

    const row = document.createElement("tr");
    row.classList.add("hover:bg-black");
    row.innerHTML = `
      <td class="border border-gray-300 text-center p-2 flex items-center">
        <img src="${flagUrl}" class="h-6 w-6 mr-2" />
        ${rate.currency.name}
      </td>
      <td class="border border-gray-300 text-center p-2">${rate.currency.unit}</td>
      <td class="border border-gray-300 text-center p-2">${rate.buy}</td>
      <td class="border border-gray-300 text-center p-2">${rate.sell}</td>
    `;
    tbody.appendChild(row);
  });
};

// Event listener for the button
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  await calculateExchangeRate();
});

// Initialize the app when the page loads
window.addEventListener("load", () => {
  const today = new Date().toISOString().split("T")[0];
  date.value = today;
  money.value = 1;
  populateTable();
  populateDropdowns();
  calculateExchangeRate();
  updateFlag(to);
});
