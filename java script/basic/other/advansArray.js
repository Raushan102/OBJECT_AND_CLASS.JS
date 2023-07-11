let arr = [1, 34, 4, 3, 3, 3];
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
let map=0;

function findBiggestNumber(array) 
{
    let first = 0;
  for (let i = 0; i < array.length; i++) {
    

    if (first < array[i]) {
      first = array[i];
    } else {
      continue;
    }
    
  }
  return first;
}
console.log("biggetNumber in array Is=",findBiggestNumber(arr));

let arr2=["niraj","raushan","golu","gudu","muna"];

function upperCase(array)
{
    
    for(let i=0;i<array.length;i++)
    {
      console.log(array[i].toUpperCase()) 
       
    }
    
  
}
upperCase(arr2);

// using arrowfunction
console.log("using arrow function");

arr2.forEach((element)=>{
  console.log(element.toUpperCase())
});
arr2.map((element)=>{console.log(element.toUpperCase())});// map works like a foreach



/// filter

let second=arr2.filter((element)=>{
  return(element.endsWith('u'))
});
console.log(second);// it is necessary to return  the value, without return we can not print it

//reduce

let arr3=[12,44,554,4,3,3,23,];

const totalSume=arr3.reduce((prev,curr)=>prev+curr,0);
console.log(totalSume);


 
console.log("biggest number is=",findBiggestNumber(arr3));



const check=arr3.every((element)=>typeof(element)==='number');// it return boolean 
console.log(check);

const above50=arr3.find((element)=>element>20);// its only return first element thats 3satify the condition
console.log(above50);

// find index
//some
//sort

//some
/* This line of code is using the `some()` method to check if at least one element in the `arr3` array
is greater than 20. It returns a boolean value (`true` if at least one element satisfies the
condition, `false` otherwise). The arrow function passed as an argument to `some()` takes an element
as input and returns `true` if the element is greater than 20, `false` otherwise. */

const Some=arr3.some((element)=>{return(element>20)});

function seprsteElemnt(element)
{
    
    return element>10;
}

console.log(arr3.some(seprsteElemnt));

// by arrow function

//const checker=arr3.some((element)=>typeof(element)==='number');
//console.log(checker);

//console.log(Some);

let arr5=new Array(52,55,53,65,59,65);
arr5.sort();
console.log(arr5);
function checker()
{
  console.log("hello word");
}

let v=setTimeout(checker,1000)


let p=setInterval(checker,1000)
//clearInterval(p)
// clearTimeout(v)



function hello ()
{
  
    
}









