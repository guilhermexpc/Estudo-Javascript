// Primitive Data Types in JavaScript

// String: text data
const userName = "Guilherme";
const email = "guilherme@gmail.com";
console.log("String:", userName);
console.log("String:", email);
console.log(typeof userName);
console.log();

// Number: numeric values (integers and decimals)
const age = 25;
const height = 1.75;
const temperature = -5;
console.log("Number:", age);
console.log("Number:", height);
console.log("Number:", temperature);
console.log(typeof age);
console.log();

// Boolean: true or false
const isStudent = true;
const isWorking = false;
console.log("Boolean:", isStudent);
console.log("Boolean:", isWorking);
console.log(typeof isStudent);
console.log();

// Null: intentional absence of value
let result = null;
console.log("Null:", result);
console.log(typeof result);
console.log();

// Undefined: variable declared but not assigned
let value;
console.log("Undefined:", value);
console.log(typeof value);

// String variable
console.log("String with 'apostrophe' inside double quotes");
console.log('String with "double quotes" inside apostrophe');
console.log(`A string with backtick allows
  writing multiple lines.`);

// Template Literal (Template string, string interpolation)
let city = "Umuarama";
let state = "Paraná";

console.log(city, state, "text");

// Concatenating text
let message = "The city of " + city + " is located in the state of " + state;
console.log(message);

// Template Literals
console.log(`The city of ${city} is located in the state of ${state}`);

/*
  Type conversion (type casting or type conversion)
  It is the explicit conversion via code, which attempts
  to convert one type into another explicitly defined in the code
*/

let numberValue = 9;
console.log(typeof numberValue);
console.log(typeof numberValue.toString());
console.log(typeof Number(numberValue));

/*
  Type coercion
  Occurs when JavaScript tries to automatically transform
  a value into another type before an operation
*/

console.log("10" + 5);
