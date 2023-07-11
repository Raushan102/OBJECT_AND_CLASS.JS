 let p = 3847658743;
let arr = p.toString().split("").map(Number);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//console.log(sewt1);

let r = [324, 444, 43, 43, 3, 3];

let sewt1 = new Set([...arr, ...r]);

/* 



/* let t=[...arr,...r]; */

/* console.log(sewt1);

console.log(sewt1.has(r)); */

/* console.log(sewt1.forEach((ele)=>console.log(2*ele)))

 for(let [index,value]of sewt1.entries())
 {
    console.log('index=',index,':',sewt1[value]);
 } */

/* const mySet = new Set(["apple", "banana", "cherry"]);

for (const [index, value] of mySet.entries()) {
  console.log(`Index ${index}: ${value}`);
} */

/* let arr2 = [1, 33, 54, 54, 5455];
let secondArray = [33, 5455, 55, 55, 54, 55, 5, 55]; */

/* 
function test(arr2, secondArray) {
  let set2 = new Set(arr2);
  

  for (const elem of secondArray) {
    if (set2.has(elem)) {
      set2.delete(elem);
    } else {
      set2.add(elem);
    }
  }

  console.log(set2);
}

test(arr2,secondArray);  */

/* let arr3=[1,2,3,4,5,6]
let arr4=[1,2,3,4,5,6,7,8,9]





function test(arr3,arr4)
{
  
  let union =new Set(arr3)

  arr4.forEach(element => {

    if(union.has(element))
    {
      
      union.delete(element)
    }
    else
    {
      union.add(element)
    }
  
  });
  console.log(union)
}

test(arr3,arr4)
//=======================================================================>


let aftersplice= arr3.splice(-2,1);

console.log(aftersplice);
console.log(arr3);

let afterat= arr3.at(-1);
console.log(afterat);
let p="raushan";

let str=p.toString()


 str=str.split("")
console.log(str) 

  str=str.splice(0).map(String)
 console.log(str)
 

//
str.splice(-1,1)

console.log(str)


p=str.join('')

p=p.toString()


console.log(typeof p) */
//==============================first way============================================>

/* let p = "raushan";

let q = p.at(0).toUpperCase();// to fetch zero index  character and convert in uppercase

q=q.split("");// to convert in array of zero index character
console.log(q);//check by the help of print


let r=p.split("");// to convert all string of variable (p) in array
console.log(r);// check

let t=r.splice(1);// to fetch string from first index to last and convert in array
console.log(t);// check



console.log(l)


let u= q.concat(t);// to concat both array 
console.log(u);


u=u.join('');
console.log(u);
console.log(typeof u); */

//=========================second way to change===================================>

string="raushan";

a=string.at(0).toUpperCase();
b=string.at(0);


string=string.replace(b,a);
console.log(string);

///===============================check two string is same of not for password  ============================================>


/* 
p=6204360983;

q=6204360983;


if(p===q)
{
  console.log("password is correct")
}
else{
  console.log("password is incorrect")
}


p="raushan";

q="raushan";


if(p===q)
{
  console.log("password is correct")
}
else{
  console.log("password is incorrect")
} 

//=========================================================================================>

















