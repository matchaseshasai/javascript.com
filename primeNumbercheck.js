var a = 11;
var isprime;

if (typeof (a) == "number") {
    if(a==0){
        console.log("Please Enter number > 1 ");
    }else if (a < 0) {
        console.log("The given number is negative Number");
    } else if (a == 1) {
        console.log("THis is neither prime nor composite");
    } else if (a > 1) {
        for (i = 2; i < a; i++) {
            if (a % i == 0) {
                isprime = "false";
                break;
            } else {
                isprime = true;
            }
        }
        if (isprime == true) {
            console.log("This is a Prime Number : " + a);
        } else {
            console.log("This Given number : " + a + " is not a prime number");
        }
    }
} else {
    console.log("Please Enter only numerics");
}
