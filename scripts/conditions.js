// const age = 19;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Omar can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Omar is too young. Wait another ${yearsLeft} years 🙂`);
// }

// const birthYear = 2002;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// const inputYear = "2002";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); // 200218
// console.log(Number(inputYear) + 18); // 2020

// console.log(Number("Omar")); // NaN - Not a Number => can't be converted to a number
// console.log(typeof NaN); // number => NaN is still a number type 😂
// console.log(String(23), 23); // 23 23
// console.log(typeof String(23), typeof 23); // string number
// console.log(Boolean(0), 0); // false 0
// console.log(Boolean(""), ""); // false - empty string => falsy values

//  type coercion - JS automatically converts types behind the scenes for us
// when an operator is dealing with two values that have different types
// console.log("I am " + 23 + " years old"); // I am 23 years old
// 23 is converted to a string because the + operator is dealing with two strings

// console.log("23" - "10" - 3); // 10 - JS converts strings to numbers
// console.log("23" * "2"); // 46 - JS converts strings to numbers
// console.log("23" / "2"); // 11.5 - JS converts strings to numbers
// console.log("23" > "18"); // true - JS converts strings to numbers

// let n = "1" + 1; // 11 - JS converts the number to a string
// n = n - 1; // 10 - JS converts the string to a number
// console.log(n);

// truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Omar")); // true
// console.log(Boolean({})); // true
// console.log(Boolean("")); // false

// conversion to boolean is always implicit, not explicit, or in other words
// is always typed coercion that JavaScript does automatically behind the scenes.
//  but when exactly does JavaScript do type coercion to boolean?
// 1- when we use logical operators, 2- when we use a logical context, like for example in an if-else statement or in a ternary operator,
//  so in all these cases, JavaScript will convert any value to a boolean in order to decide what to do next.

// const money = 0;
// if (money) {
//   console.log("Don't spend it all 😉");
// } else {
//   console.log("You should get a job!");
// }

// let height; // undefined => falsy value
// height = 0; // 0 => falsy value
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// == vs ===

// const age = 18;
// if (age === 18) console.log("You gesut became an adult :D");

//  === - strict equality [type and value] doesn't perform type coercion
// == - lossy equality -  does type coercion [value].
// so it's better to use === to avoid bugs in our code.
// always use === unless you have a very good reason to use ==

// prompt("What's your favorite number?");
// prompt returns a string
// so we need to convert it to a number
// const favoriteNumber = Number(prompt("What's your favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);
// if (favoriteNumber === 23) {
//   console.log("Cool! 23 is an amazing number!");
// }
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision); // true

console.log(hasDriversLicense || hasGoodVision); // true

console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// Coding Challenge #3 
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win the trophy 🏆");
}

*/

// const day = "monday";
// switch (day) {
//   case "monday": // day === 'monday' - strict equality
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const n = "0";

// switch (n) {
//   case 0:
//     console.log("Zero");
//     break;
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   default:
//     console.log("Unknown number"); // Unknown number
// }

// expression - a piece of code that produces a value
// statement - a bigger piece of code that doesn't produce a value on itself
// expression produces a value, statement doesn't produce a value
// 3 + 4 // expression
// if (23 > 10) { // statement
//   const str = "23 is bigger";
// }

// the conditional operator
// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);
// the conditional operator is an operator that we can use to write simple if-else statements in a more concise way.
// it's a ternary operator because it has three parts.
// the condition, the if part, and the else part.
// it's a great way to write simple if-else statements in a more concise way.

// usefull to conditionally declare a variable.
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {s
//   drink2 = "water 💧";
// }

// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// Coding Challenge #4
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);