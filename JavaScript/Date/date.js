// 1. Date() - current date and time
const currentDate = new Date();
console.log("Current Date:", currentDate);

console.log("Day:", currentDate.getDay()); // currentDate.getDate()
console.log("date", currentDate.getDate());
console.log("get full year", currentDate.getFullYear());
console.log("get month", currentDate.getMonth());
console.log("get hours", currentDate.getHours());
console.log("get var minutes", currentDate.getMinutes());
console.log("get seconds", currentDate.getSeconds());

// 2. Date(milliseconds) - specific point in time
// const millisecondsSinceEpoch = 1609459200000; // January 1, 2021
// const dateFromMilliseconds = new Date(millisecondsSinceEpoch);
// console.log("Date from Milliseconds:", dateFromMilliseconds);

// // 3. Date(dateString) - specific date and time from string
// const dateString = "2022-01-01T12:00:00Z";
// const dateFromString = new Date(dateString);
// console.log("Date from String:", dateFromString);

// // 4. Date(year, month, day, hours, minutes, seconds, milliseconds) - specific date and time
// const specificDate = new Date(2023, 0, 7, 12, 30, 0, 0); // January 7, 2023, 12:30:00
// console.log("Specific Date:", specificDate);
