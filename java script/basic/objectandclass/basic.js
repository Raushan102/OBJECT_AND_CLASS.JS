
class student {
     name;
     Class;
     rollNumber;

     
     

     constructor(name, Class, roll)
     {
         this.name = name;
         this.Class = Class;
         this.rollNumber = roll;
      
     }

      display(){

        console.log("name ="+this.name+" class ="+this.Class+" roll ="+this.rollNumber);
    
     }


    
}

class complex {

     #real;
     #imagenary;


     display()
     {
        console.log( this.#real+"+ i"+ this.#imagenary);
     }

     constructor(real, imagenary)
     {
         this.#real = real;
         this.#imagenary = imagenary;
     }


    get real()
     {
        return this.#real;

     }
     get img()
     {
        return this.#imagenary;
    }




    addComplexNumber(c)
   {
     this.#real+=c.real;
     this.#imagenary+=c.img;
   }

}

let neeraj=new student("neeraj",12,1);

neeraj.display();

let first=new complex(5,5);

let second=new complex(3,6);

first.display();

second.display();

addComplexNumber(second);

console.log(first.display());



