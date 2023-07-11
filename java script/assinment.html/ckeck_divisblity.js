

let arra=[3,6,9,12,15,18,21,24,27,30];

function check(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%3==0 && arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}a

check(arra);

let arra1= new Array(12,34,3,43,43,4,34,32,42,);

arra1.push(45);

console.log(arra1);

arra1.pop();

console.log(arra1);

arra1.shift();

console.log(arra1);

arra1.unshift("hello i am raushan");
console.log(arra1);