
let oneArray=[1,2,3,4,5,5];

var secondArray=[6,7,8,9,10];

let thirdArray=[...oneArray,...secondArray];

console.log(...thirdArray.join("").toString());


