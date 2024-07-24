// Math operators
// const now = 2024;
// const ageOmar = now - 2002;
// const ageAli = now - 2000;

// console.log(ageOmar, ageAli);
// console.log(ageOmar * 2, ageOmar / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const fristName = "Omar";
// const lastName = "Khaled";

// console.log(fristName + " " + lastName);

//  typeof operator

// Assigmnet operator
// let x = 10 + 5; // 15   + before =
// console.log(x);
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100

// Comparison operators : produce boolean values
// console.log(ageOmar > ageAli); // >, <, >=, <=
// console.log(ageAli >= 18);

// const isFullAge = ageAli >= 18;

//  left to right

// console.log(now - 2002 > now - 2000);
// let o, a;
// o = a = 25 - 10 - 5; // x = y = 10, x = 10

//  if assigment operator executed from left to right then the x will be undefined because the value of y is not defined yet.

// const averageAge = (ageAli + ageOmar) / 2;
// console.log(ageAli, ageOmar, averageAge);

//  Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);
