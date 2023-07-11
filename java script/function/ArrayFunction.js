let firstArray = [12, 324, 23, 2, 32, 32, 23];
let string = "pw skills is popular leaning paltform";

//let touppersace=firstArray.map((element)=>element.toUpperCase());
//console.log(touppersace);

let patern = "pw";
let flag = "gi";

let reg = new RegExp(patern, flag);

console.log(string.replace(reg, "hello"));

let testr = reg.test(string);

console.log(testr);

console.log(firstArray.find((element) => element > 10));

console.log(firstArray.filter((element) => element < 10));

let v = firstArray.sort((ele1, ele2) => {
  return ele2 - ele1; // for  descending   order
});

console.log("last index number of " + v[v.length - 1]);

let w = firstArray.sort((ele1, ele2) => {
  return ele1 - ele2; // for  ascending   order
});

console.log("last index number of " + w[w.length - 1]);

let max = Math.max.apply(null, firstArray);
console.log(max);

//when ever want ot print the function any peace of code

function first() {
  console.log("hello i am raushan!");
}

console.log(first.toString());

//=========Array.from is use to convert element in array===================>

let a=[3,34,233,23,2,32];
function second()
{
  let ar=Array.from(arguments);

  console.log(ar.map((el)=>el))
}

second(1,32,2,3,23,2);
