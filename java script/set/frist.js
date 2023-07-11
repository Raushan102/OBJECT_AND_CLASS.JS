

let set =new Set();

set.add(name="hell")

set.add(id=1);// add( is use to add the element is set)
set.add(rollnumber=2);

console.log(set);

function  first(set)
{

     let arr=Array.from(set); // Array.from() is use to   to convert the set in to the array format
    let [ name,id,rollnumber]=arr;

    console.log("name of the student is =" + name);

console.log("roll number is =" + rollnumber);

console.log("id of the student is =" + id);
}

first(set);

console.log(set.has(2));// to usk question  to the set that you has this element

console.log(set.keys());// this method is use to  fetch all keys in the set 

console.log(set.values());// this method is use to fetch all values in the set

console.log(set.entries());// this method is use to fetch keys with value

console.log(set.delete());// this method is use to delete one element is the set

console.log(set.clear());// this method is use to clear all element in set 



 

