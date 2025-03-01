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

btn.addEventListener("click", (e) => {
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

  // Replace with your actual base URL
  const URL = `${BASE_URL}from=${validDate}&to=${validDate}&per_page=20&page=1`;
  console.log(URL);
});
