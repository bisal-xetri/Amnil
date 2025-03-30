// // Creating a Date Object
// // Current date and time
// const now = new Date();
// console.log(now); // Outputs current date and time

// // Specific date and time (YYYY, MM (0-based), DD, HH, MM, SS, MS)
// const specificDate = new Date(2025, 2, 12, 14, 30, 0);
// console.log(specificDate); // March 12, 2025, 14:30:00

// // Date from a string
// const dateFromString = new Date("2025-03-12T14:30:00");
// console.log(dateFromString);

// // Date from milliseconds since Jan 1, 1970
// const dateFromMs = new Date(0); // Epoch time
// console.log(dateFromMs); // Jan 1, 1970

// //Getting Date and Time Components
// const now1 = new Date();

// console.log(now1.getFullYear()); // 2025
// console.log(now1.getMonth()); // 2 (March, because months are 0-based)
// console.log(now1.getDate()); // 12
// console.log(now1.getDay()); // 3 (Wednesday, where 0 = Sunday)
// console.log(now1.getHours()); // 14 (2 PM)
// console.log(now1.getMinutes()); // 30
// console.log(now1.getSeconds()); // 0
// console.log(now1.getMilliseconds()); // 0
// console.log(now.getTime()); // Milliseconds since Jan 1, 1970

// // Formatting Date and Time
// const now2 = new Date();

// console.log(now2.toDateString()); // "Wed Mar 12 2025"
// console.log(now2.toTimeString()); // "14:30:00 GMT+0545"
// console.log(now2.toISOString()); // "2025-03-12T08:45:00.000Z"
// console.log(now2.toLocaleDateString()); // "3/12/2025"
// console.log(now2.toLocaleTimeString()); // "2:30:00 PM"

// //Comparing Dates
// const date1 = new Date("2025-03-12");
// const date2 = new Date("2025-03-13");

// console.log(date1 < date2); // true
// console.log(date1.getTime() === date2.getTime()); // false

// //  Calculating Time Differences
// const start = new Date("2025-03-01");
// const end = new Date("2025-03-12");

// const diffMs = end - start;

// const diffDays = diffMs / (1000 * 60 * 60 * 24);

// console.log(diffDays); // 11 days

// // Calculating User’s Age
// function calculateAge(birthDate) {
//   const birth = new Date(birthDate);
//   const today = new Date();

//   let age = today.getFullYear() - birth.getFullYear();
//   const monthDiff = today.getMonth() - birth.getMonth();

//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
//     age--;
//   }

//   return age;
// }

// console.log(calculateAge("2001-07-15")); // Age in years

// // Function to convert date format from "dd-mm-yyyy" to "mm-dd-yyyy"
// function convertDateFormat(date) {
//   // Split the date string into parts
//   const [day, month, year] = date.split("-");

//   // Rearrange to "mm-dd-yyyy" format
//   const formattedDate = `${month}-${day}-${year}`;

//   return formattedDate;
// }

// // Example usage
// const date = "15-02-2020";
// console.log(convertDateFormat(date)); // Output: "02-15-2020"

// Convert Tokyo time to Date object
const tokyoDate = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Tokyo",
});
// Convert Tokyo time to Nepal time
const nepalTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kathmandu",
});
console.log("Nepal Time:", nepalTime);
