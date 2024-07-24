## JavaScript Variable Declarations

### Introduction

JavaScript offers three primary ways to declare variables: `var`, `let`, and `const`. Each has distinct characteristics in terms of scope, reassignment, and hoisting.

### let Keyword

- **Purpose:** For variables that might change later.
- **Introduced:** ES6 (2015)
- **Scope:** Block-scoped (within the enclosing block, like `if`, `for`, or `function`)
- **Note:** you `can declare empty` variable and assign a value later

**Example:**

```javascript
let firstName = "Omar";
firstName = "Ahmed"; // Reassignment allowed

let age; // can declare empty variables
age = 31;
```

### const Keyword

- **Purpose:** For variables that should never change (immutable).
- **Introduced:** ES6 (2015)
- **Scope:** Block-scoped
- **Note:** Must be initialized at declaration.

**Example:**

```javascript
const birthYear = 1990;
// birthYear = 3.1415; // TypeError: Assignment to constant variable
```

### var Keyword (Legacy)

- **Purpose:** For variables that might change later (older syntax).
- **Scope:** Function-scoped (within the enclosing function)
- **Hoisting:** Declared variables are moved to the top of their scope, but without initialization.

**Example:**

```javascript
var job = "programmer";
job = "teacher"; // Reassignment allowed
```

### Scope Differences

```javascript
function exampleFunction() {
  if (true) {
    var functionScoped = "I'm function-scoped";
    let blockScoped = "I'm block-scoped";
    const alsoBlockScoped = "I'm also block-scoped";
  }

  console.log(functionScoped); // Outputs: I'm function-scoped
  // console.log(blockScoped); // ReferenceError: blockScoped is not defined
  // console.log(alsoBlockScoped); // ReferenceError: alsoBlockScoped is not defined
}
```

### Hoisting Differences

```javascript
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I am hoisted";

console.log(notHoistedLet); // ReferenceError: notHoistedLet is not defined
let notHoistedLet = "I am not hoisted";
```

### Summary

- Use `let` for variables that might change.
- Use `const` for variables that should never change.
- Avoid `var` in modern JavaScript due to potential scoping and hoisting issues.

**Prefer `let` and `const` over `var` for better code readability and maintainability.**
