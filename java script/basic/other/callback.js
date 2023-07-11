

let arr=[];

let arra= [1,2,3,4,-3,-5,-4,-3,0];


function removeNegative(arra,arr)
{
   for (const ele of arra) {
    
   
    {
        if(ele<=0)
        {
            arr.push(ele);
            arra.delete(ele);

            

            
        }
        else
        {
            continue;
        }
    }
}
}


removeNegative(arra,arr);


for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arra.forEach((ele)=>console.log("element of arra is =",ele));






