let b = { id: 45, name: "raushan", age: 20 }; // way of define object
console.log(b);

let a = new Object(); // another way to define object

{
  a.id = 54;
  a.name = "raushan";
  a.friend = "raushan";
  a.salary = 2000;
}
console.log(a);

function emp(id, name, age, salary,classes) {// function declaration

  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.classes=classes;
}


const emp1 = new emp(1, "raushan", 20, 2)//object
 const emp2 = new emp(2, "raushan", 30, 6,6)// object

 console.log(emp1);
 console.log(emp2);
 

 emp1.friend="neeraj";
 emp2.dateo_f_birth="2020-01-01";
 emp2.classes=69;

 emp2['friend']="raushan"; //another way to add the element in object and change the the element 

delete emp2.classes;//delete the element in object

emp1.classes=25;//add the element in object



 console.log(emp1);//print 
 console.log(emp2);//print
 console.log(emp2);//print

 //last lecture

let emp3=new Object();
{
  emp3.name="raushan";
  emp3.age=20;
  emp3.salary=2000;
  emp3.classes=8;
}




 emp3.rollNumber=23;
 let p=Object.keys(emp3);

 let o=Object.values(emp3);

 
 let q=Object.entries(emp3);
 
 console.log(q);

 
 //Object.freeze(q);// is use to freeze the object we cannot update any thing in this Object

 Object.seal(emp3);//is use to seal the object means we can not update anything but we can add the new property to the object

 



 emp3.date=12;

 console.log(p);
 console.log(o);
 let s=Object.getOwnPropertyNames(emp3);//another way to get the property name of the object


 console.log(s);




 let r=Object.assign({x: 16},emp3);// to create a new object we can use the assign function to create a new object with the same properties as another object

 console.log(r);

 //============================================revision====================>



 let rr={name:"rauhsan",id:38,rollNumber:47};
 console.log(rr);


 // another way to define object 


 let rr1=new Object();

 rr1.name="raja";
 rr1.rollNumber=683;


 /// another way to create the object using  by the help of function ;

 function omp(name,id,rollnumber)
 {
  this.name=name;
  this.id=id;
  this.rollNumber=rollnumber;


 }


 let k=new omp("raushan",46,64);

 console.log(k);

 // to fetch the  all keys of the object in use keys 

 let rray=Object.keys(rr1);

 console.log(rray);

 let rrays2=Object.values(k);
 console.log(rrays2);

 // to fetch the keys and value we use the entries function that it is inbuilt function provided by sj

 let c=Object.entries(rr1);

 // after using the seal in object we can only update the property of but not add any property


 Object.seal(rr1)
 Object.freeze(rr1);




 // to assign the all property of a object in to an another object we use the  assign keywo.reduce((
  

   
 let aonject={name:"raushank", id:34, type:"very bad"};

// let newobject=new Object();

 let newobject=Object.assign({},aonject);

 console.log(newobject);


// ===================some inportant point of the  object in JSON.stringify(


//==>seal();
//===>freeze();
//==>


 
 
 

 
 



 


 




