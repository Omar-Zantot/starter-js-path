// three diffrent ways to declare variables in JavaScript

// 1.let - is used for variables that can be changed later
// 2.const - is used for variables that should never change
// 3.var - is the old way of declaring variables in JavaScript

//  let and const introduced in ES6 (2015)

// ----------------------------------------------------------------

// 1.let keyword :
// we use we use the let keyword to declare variables that
// can be changed later so basically during the execution of our program.

let fristName = "Omar";

fristName = "Ahmed"; // assign a new value to the variable (mutate) the variable
// * declare empty variable and assign a value later

// in terms of scope, variables declared with let are block-scoped

// 2. const keyword
// * we use the const keyword to declare variables that should never change (immutable variables)
// ! cant declare emtyp variable with const

// const birthYear = 1990;
// birthYear = 3.1415; // TypeError: Assignment to constant variable.

// const PI; // SyntaxError: Missing initializer in const declaration

// 3. var keyword (old way)
// * we use the var keyword to declare variables that can be changed later
// * var is function-scoped
// * var is not block-scoped
// * var can be hoisted

// var job = "programmer";
// job = "teacher"; // reassign the variable

lastName = "Ahmed"; // js will create property on the global object
console.log(lastName);
// ----------------------------------------------------------------

//  advanced in section 7 😊
