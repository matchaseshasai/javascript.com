var a = "100";
if (typeof (a) != "number") {
    console.log("The given input is not a number : " + a);
}
else if (a % 2 == 0) {
    console.log("The Given Number " + a + " is Even ");
} else {
    console.log("The Given Number " + a + " is Odd");
}

