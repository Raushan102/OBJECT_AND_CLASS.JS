
let array1= new Array(1,4,4,545,4,43,4343,3);


let newset= new Set(array1);



let newsetFirst= new Set([...array1]);



console.log(newset);
 // output is Set(6) { 1, 4, 545, 43, 4343, 3 } because set always store unique values

console.log(newsetFirst);

console.log(typeof newsetFirst);
console.log( typeof newset);
//+++++add is use to add the element is array
newset.add("raushan");

console.log(newset);

//+++++ clear is use to clear the array means all element is array are deleted

newset.clear();
console.log(newset);