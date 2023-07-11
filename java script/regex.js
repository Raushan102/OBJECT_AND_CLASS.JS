 // first way to emplement the regex 

let pattern='pw';// make a variable to hold the pattern

let regExOne=new RegExp(pattern)//make a regex and pass the pattern to it

let flag='gi';//make a variable to hold the flag (gi=is sa g=global  and i=ignore case)

let regExTwo=new RegExp(pattern,flag)// and finaly make a regex and pass the pattern and flag to it


                   // or or or  both way are same in  above we make two variable  and store the pattern ans flag but here 

                  // below we directly pass the pattern and flag to the regex instead we make a variable and store the pattern ans flag  then pass the pattern and flag to the regex

let regExFour=new RegExp('pw','gi')//make a regex and pass the pattern and flag to it



// another way to emplement regix

let regExThree=/pw/gi   // here // indicate the the pattern and after / we declear the fleg  
// if we remove the i in flag then 

const paragraph= 'raushan kumar saw pw dbfhdbc pw jfbdcdnc dokfodf epw';// here we make a string paragraph and store it in a variable for check
const result=paragraph.match(regExThree);// it return the all string that match the pattern
const result1=regExThree.test(paragraph);// it always return true or false means boolian value

const result2=paragraph.match(regExFour);
console.log(result2);

console.log(result);

console.log(result1);

// generally use the 

const  useReplace=paragraph.replace(regExThree, 'neeraj');
console.log(useReplace);

let link= 'learn.pwskills.com/raushan-kumar-saw';

let result5=link.replace(/-/gi,'%20');
console.log(result5);


let link2='learn.pwskills.com/raushan%50kumar%51saw';

let result6=link2.replace(/%\d0/gi,'-');
console.log(result6);/*here \d indicate the if any randam number is come after the % we declear the fleg
 that will also access the regix*/

 // if i write like this  in place of 0 we put \d means if any two number that comes after the % we also access the regix;
 // d means one number 
  let result7=link2.replace(/%\d\d/gi,'-'); 
  console.log(result7);


  // for  more information we can go on regexr.comweb side 
  
  //for match email we got the email match [pattern]  from this link 
  // community patter here we find many pattern to match any thing like email , phone number,cradit card etc... 