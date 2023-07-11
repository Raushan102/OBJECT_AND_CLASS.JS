
import java.util.*;

// class for find reverse of any number
class reverseNumber {

    public int getReverse(int number) {// function and parameter of class reverseNumber
        int reverse = 0;
        while (number != 0)// condition

        {

            int rem = number % 10;// for remender
            reverse = reverse * 10 + rem;
            number = number / 10;// for division result
        }
        return reverse;// returning reverse of number

    }
}

public class reverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        reverseNumber rNumber = new reverseNumber();// object for find reverse of
        System.out.println("enter number");
        int number = sc.nextInt();

        System.out.println("reverse of number is " + rNumber.getReverse(number));
    }

}
