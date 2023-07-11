
const cude=(n)=>
{
 return n ** 2;

}

function cuboid (cude,n)
{
  return cude(n)*n;

}

console.log(cuboid(cude,5));
function first(n)
{
    return function second(m)
    {
        return function third(o)
        {
            return  n+m+o;
        }
        return third();
        
    }
    return second();

}
console.log(first(2)(3)(4));


function hello()
{
    return function second()
    {
        console.log("hello world!");
    }
}

let over=hello();
console.log(over);
over();

let arr=[1,2,3,4,5,6,7,8,9,10];

function sum(arr)
{
    let sume=0;
    for(let i=0;i<arr.length;i++)
    {
        sume=sume+arr[i];
    }
    return sume;
}

console.log(sum(arr));


/*setInterval(function print()
{
    console.log("raushan")

},1000)*/

function println()
{
    console.log("hello ankit");
}
setInterval(println,5000);

