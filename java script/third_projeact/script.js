result = document.getElementById("result1")

function insertValue(value)
{
 result.value += value
}

function calculateResult()
{
 result.value = eval(result.value)
}

function clearInputField()
{
 result.value ="";
}


function removeValue()
{
    p=result.value;
    
    
   let  p_string=p.toString();

    p_string=p_string.slice(0,-1);
   
    p=parseInt(p_string);
    
   result.value =p;
    
} 