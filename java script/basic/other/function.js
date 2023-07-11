/* function declaration */

function first() {
  console.log("how are you");
}
/*                      function calling                   */
first(); //output  how are you

function sqr(x) {
  /* x is parameter */
  // console.log(x*x);
  return x * x;
}

let a = sqr(5); /* 5 id the argument
 output 25*/

console.log(a);
//output 25

// next lecture function 2th
function messsage() {
  console.log("hello world i am Raushan Kumar saw");
}

messsage();
messsage();
/*
output
hello world i am Raushan Kumar saw
hello world i am Raushan Kumar saw
*/

let message = messsage();

console.log(message);
/*

output
hello world i am Raushan Kumar saw


*/

// lecture function 3rd

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

/*
3
output

*/

function divide(x = 10, y = 12) {
  // x=10 y=12 is default value if we not pass any value then default value is automatically assigned21

  return x / y;
}

console.log(divide()); //output  0.8333333333333334

console.log(divide(3, 6)); // output 0.5

console.log(divide(24)); // output 2

console.log(divide());

function message1(
  helliamraushan = "raja ram mohan ray was a great social reformer"
) {
  // function declaration

  console.log(helliamraushan);
}

message1(
  "hello i am raushan kumar saw i am a developer  by profession and and i am a student of ranchi university "
); // function calling
/* output hello i am raushan kumar saw i am a developer  by 
 profession and*/

message1();
// output raja ram mohan ray was a great social reformer

// array as a parameter

const rau = new Array(23, 34, 4, 54, 5, 5);

function subtract([num1, num4]) {
  return num1 - num4;
}

let result = subtract(rau);

console.log(result);

//output =-11

/// lecture 4 for function
// function with multiple parameters

function multipleParameter() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}


let sume = multipleParameter(1, 2, 3, 4, 4, 4, 5, 5, 66, 7);

console.log(sume);
//output is 101;

///multiple parameters  passed in a function as a argument

// Arrow function

let arrowVariable = (x) => x * x;

console.log(arrowVariable(4));

// Arrow function output is 16

const arrowFunction = (x, y) => x + y;

console.log(arrowFunction(1, 5)); //output 6;

/// Anonymous function

let x = function () {
  console.log("hello i am raushan kumar saw");
};

x();

///output is hello  i am raushan kumar saw

let y = function (x, y) {
  return x + y;
};

console.log(y(29, 34));
// output output is 63

//self invoking function

(function (x, y) {
  console.log(x - y);
})(45, 45);
//self invoking function output is 0
