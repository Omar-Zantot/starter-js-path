const fristName = "Omar";
const job = "Programmer";
const birthYear = 2002;
const year = 2024;
const omar =
  "I'm " + fristName + ", a " + (year - birthYear) + " years old " + job + "!"; // old way

console.log(omar);
const omarNew = `I'm ${fristName}, a ${year - birthYear} years old ${job}!`; // template literals
console.log(omarNew);
console.log(`Just a regular string...`); // template literals

console.log("String with \n multiple \n lines"); // old way
console.log(`String with
multiple
lines`); // template literals
