 class cylinder1{
    private int height;
    private int radious;


     public int  getHeight() { // we make a getter and setter to assign the height and radious
        return height;
    }
    public void setHeight(int height) {
        this.height = height;
    }
                                             
    public int getRadious() {
        return radious;
    }
    public void setRadious(int radious) {
        this.radious=radious;
    };
 // note:- see what the benefit of constructor above code is equal to below constructor 

   /* public  cylinder1(int height, int radious)//we make a cylinder con constructor for assign the value og height and radious
    {
        this.height =height;
        this.radious =radious;
    }*/

    public  double tot_Surface_Area_of_cylinder()//=function for find total  surface area of cylinder
    {
        return 2 * Math.PI * radious * radious + 2 * Math.PI * radious * height;
    }
    public double volume() {// make  a cylinder for volume of cylinder
        return Math.PI * radious * radious * height;

    }
 }
 class rectangle{
    private int length;
    private int breath;

     public rectangle(int length, int breath)
     {
        this.length=length;
        this.breath=breath;
     }
    public  rectangle()
     {
        this.length=4;
        this.breath=5;
        
     }
    public  rectangle(int breath)
     {
        length=0;
        this.breath=breath;
     }
   

    }

public class cylinder {

    public static void main(String[] args) {
        cylinder1 cylinder2 = new cylinder1();
        
        //cylinder1 cylinder2 = new cylinder1(12,9); for constructer
        cylinder2.setHeight(12);// function calling to asssign the height of the cylinder
        cylinder2.setRadious(9);// fucntion calling to asssign the radius of the cylinder


        double tot_Surface_Area_of_cylinder = cylinder2.tot_Surface_Area_of_cylinder();

        double volume=cylinder2.volume();

        System.out.println( tot_Surface_Area_of_cylinder);
        System.out.println(volume);

        rectangle rectangle1=new rectangle();
        rectangle rectangle2=new rectangle(54,65);
        
    }
    
}
