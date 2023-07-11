const btn=document.getElementById("button");//   to target  the element  by the id of the button nad  assigned in a veriable that is btn.

function colorDecider()// declear a  function the make a hexadecimal color combination
{
  let val="1234567890ABCDEF";// we declear a veriable that store the number of alphabetic characters that is used while making the color generally we combine the alphabetic characters and the number.
 let cons="#";// generally in every hexadecimal color code start from # ;


  for(let i=0; i<6;i++)
  {
    cons =cons+val[Math.floor(Math.random()*16)];// math .random is use to pick the random number in val variable this time val is use like is array; math.floor is used to remove the decimal number 
  }
  return cons;

};
console.log(colorDecider);

function colorChanger()
{
  btn.style.backgroundColor=colorDecider();
}

btn.addEventListener("click",colorChanger);