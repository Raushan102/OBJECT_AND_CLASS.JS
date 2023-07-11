function getRandomInt(max) {
  // randam number generater  function
  return Math.floor(Math.random() * max);
}

function FunctionName(x) {
  //  this  function convert the random number in rock ,paper and scissors to a string
  if (x === 0) {
    return "rock";
  } else if (x === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function Functionrefresh() {
  // this function refresh the page than all data erased and new page generate  for play again
  window.location.reload();
}

function resultforfunction(x) {
  //it is result function that take input and return it as same for
  return x;
}

function FunctionZero() {
  return (userInput.innerText=     e.append('<i class="fa-sharp fa-solid fa-hand-back-fist">')); // this function  assign rock in  userInput when user call the function  mean when user  click on rock button
}
function Functionone() {
  return (userInput.innerText = "paper"); // this function assign paper in userInput when user call the function  mean when user  click on paper button
}
function Functiontwo() {
  return (userInput.innerText =
    "scissors"); /*this function assign scissors in userInput when user call the function  mean when user  click on scissor button*/
}

function mainFunction() {
  /// main logic of rock paper and scissors
  if (userInput.innerText === computerInput.innerText) {
    result.innerText = resultforfunction("drow");
    computerInput.style = "display:block";
  } else if (
    (computerInput.innerText == "rock" && userInput.innerText == "scissors") ||
    (computerInput.innerText == "scissors" && userInput.innerText == "paper") ||
    (computerInput.innerText == "paper" && userInput.innerText == "rock")
  ) {
    result.innerText = resultforfunction("computer win");
    computerInput.style = "display:block";
  } else {
    result.innerText = resultforfunction("you win");
    computerInput.style = "display:block";
  }
}
// get the element or traget the element for

let computerInput = document.getElementById("computerInput");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
submit.addEventListener(
  /* when user click on the user submit then mainFunction call  then mainFunction calculate and result are  show*/
  "click",
  mainFunction
);
let userInput = document.getElementById("userInput");
let Zero = document.getElementById("Zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let refresh = document.getElementById("refresh");

console.log(userInput);

Zero.addEventListener("click", FunctionZero); // add event listener for zero on click ita call the functionZero
one.addEventListener("click", Functionone); // add event listener for one on click ita call the functionone
two.addEventListener("click", Functiontwo); // add event listener for two on click ita call the functiontwo
refresh.addEventListener("click", Functionrefresh); // add event listener for refresh the page

let x = getRandomInt(3);
computerInput.innerText = FunctionName(x); // for computer imput

computerInput.style =
  "display:none"; /* hideing the computer input because  when user choice our choice 
that not see the  computer  randam choice after result its show with result */

console.log(result);

  
