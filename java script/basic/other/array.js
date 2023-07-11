

let a=[4,54,5,5,5,5,"raushan"];
console.log(a);



a[4]="kumar";

console.log(a);
/* there  are also a method to create the array */

let b=new Array("raushan ","raja","raushan");
console.log(b);

let arr=new Array("raushan","raja","sonu","raju");


/*to remove any element in array from last we use the pop */

let p=arr.pop();
console.log(p);
console.log(a);

/*to add element in array from end  we use the push  */

arr.push(50);
console.log(arr);


let d=new Array(1,2,3,3,4,4,4);

console.log(d);

 
/*remove item from array form front we use the shift */



d.shift();
console.log(d);



/* add item in array from front we use the unshift */


d.unshift(9);
console.log(d);


/* concat is the method  to add two array and create and stored in a new array*/

let r=["1","b","c","d","e","f","g","h","i","j"];

let k=new Array(1,2,2,3,3,3,3,3,3,3,3,3,3);
let z=r.concat(k);
console.log(r.concat(k));

console.log(z);

console.log(z);
/* to find the length of the array we use array name and .length */
console.log(z.length);
/* to jointhe two array and make an string we use the join  */

let t=z.join("raushan");
console.log(t);
console.log(z.join("&"));
console.log(z.join(""));


let x=new Array(1,2,3,4,5,6,7);
/* to reverse the all element in array we use the array name.reverse */

let y=x.reverse();

console.log(y);
/* to find index of any element we use  array-name.indexof(element) */

console.log(y.indexOf(5));


let a3=new Array(1,2,3,4,5,6,7);
 let o=a3.reverse();
 console.log(o);
 
 let arr1=[1,2,3,4,4,5,55]

 /* to fetch element of array by index more than one from mid of the array we use slice */

 console.log(arr1.slice(0,3));

 /*splice is use to add element in mid of the array and also use to delete the element from middel */


 console.log(arr1.splice(3,2,15));  // 3 is index where element be added and 2 is element will delete and 15 is element to be added


 console.log(arr1); 

  