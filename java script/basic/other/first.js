//upper program is fro check input number is prime or not;
let n = 4;
let c = 0;
let i;

for (i = 1; i <= n; i++) {
  if (n % i == 0) {
    c++;
  }
}

if (c == 2) {
  console.log("input number is prime  number");
} else {
  console.log("input number is not prime number");
}

//this program for add two numbers

let a = 6;
let b = 68;
console.log("addition of number is =", a + b);
console.log(typeof (a + b));

const raushan = {
  friend: "niraj",
  home: "murma lala",
  collage: "doranda collage",
  laptopcompany: "hp",
};

console.log(raushan.friend);
