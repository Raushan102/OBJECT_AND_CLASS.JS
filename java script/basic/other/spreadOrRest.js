

// spread operator is use to spread the elements of array means it take array and make array free
//+++++++++spread+++++++++++++++++++++++


let  array1=[1,2,3,4,54,4];
let array2=[1,2,3,];

function useSpread(array,array1) 
{
    let finalArrayIS=[...array,...array]

   // console.log(finalArrayIS);
}

useSpread(array1,array2);

//rest operator is use to convert all argument is array thay Array.from(argument)
//++++++++++++++Rest++++++++++++++++++++++

function useRest()
{
     let finalArgumentIs= Array.from(arguments);

     let args= finalArgumentIs.map(a=>a);

    // console.log(args);
}

useRest(5,4,5,5,4,5,4,4,56486444);


//++++++++++++use of spread operator++++++++++

let me="raushankuamr";

let array3=[1,3,4,3,...me,87]

console.log([...me].forEach((ele)=>ele))

console.log(array3);



console.log([...me]);

console.log(array3);


console.log(...array1)




