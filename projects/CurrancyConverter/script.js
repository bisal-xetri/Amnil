const date = document.getElementById("date");
const money = document.getElementById("amount");
const dropDown = document.querySelectorAll("#fromDropdown");
const btn = document.querySelector("#btn");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");

// const customDate = new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD' format

const BASE_URL = `https://www.nrb.org.np/api/forex/v1/rates?`;

for (let select of dropDown) {
  console.log(select);
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.classList.add("text-[14px]");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "NPR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (element) => {
    updateFlag(element.target);
  });
}

//update flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  console.log(countryCode);
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = money.value;

  // Ensure date input field's max attribute is set to today's date
  const today = new Date().toISOString().split("T")[0];
  date.setAttribute("max", today);

  // Get and validate the date value
  let dateValue = date.value;
  if (dateValue > today) {
    dateValue = today;
    date.value = today;
  }
  let validDate = dateValue.split("T")[0];
  console.log(validDate);

  // Validate the amount value
  if (amount === "" || amount < 1) {
    amount = 1;
    money.value = 1;
  }
  console.log(from.value, to.value);

  const URL = `${BASE_URL}from=${validDate}&to=${validDate}&per_page=20&page=1`;
  let response = await fetch(URL);
  let result = await response.json();
  let rates = result.data.payload[0].rates;
  // for (let countryCode of rates) {
  //   console.log(countryCode.sell);
  // }
  const countryCode = rates.map((country) => country.currency.iso3);
  console.log(countryCode);
  const sellRate = rates.map((rate) => rate.sell);
  console.log(sellRate);

  const combinedObject = countryCode.reduce((obj, key, index) => {
    obj[key] = sellRate[index];
    return obj;
  }, {});

  console.log(combinedObject);
  // console.log(rate.payload[0].rates[0].sell);
  console.log(rates);
});

// btn.addEventListener("click", async (e) => {
//   e.preventDefault();
//   let amount = money.value;

//   const today = new Date().toISOString().split("T")[0];
//   date.setAttribute("max", today);

//   let dateValue = date.value || today;
//   let validDate = dateValue.split("T")[0];

//   if (amount === "" || amount < 1) {
//     amount = 1;
//     money.value = 1;
//   }
//   try {
//     const rates = await fetchExchangeRates(validDate);
//     const exchangeRate = rates.find(rate => rate.currency.iso3 === to.value);
//     if (exchangeRate) {
//       let convertedAmount = (amount * exchangeRate.sell).toFixed(2);
//       rateDisplay.innerText = `${amount} ${from.value} = ${convertedAmount} ${to.value}`;
//     } else {
//       rateDisplay.innerText = "Exchange rate not available.";
//     }
//   } catch (error) {
//     rateDisplay.innerText = "Failed to fetch exchange rates. Please try again later.";
//   }
// });
// //fetch Api
// const fetchExchangeRates = async (date) => {
//   const URL = `${BASE_URL}from=${date}&to=${date}&per_page=20&page=1`;
//   try {
//     let response = await fetch(URL);
//     let result = await response.json();
//     return result.data.payload[0].rates;
//   } catch (error) {
//     console.error("Error fetching exchange rates:", error);
//     throw new Error("Failed to fetch exchange rates");
//   }
// };
