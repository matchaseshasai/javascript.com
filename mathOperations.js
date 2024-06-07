var num1=12;
var num2=10;

//In this case the result it 1210 . 
// As the first valriable below is string i.e Addition of two.. So it treats everything as string and so its just added strings and converted num1 and num2 as string.
console.log("Addition of two numbers : "+ num1+num2);

//To avoid above issue, we shoulds either say (num1 + num2) a braces during addition 
// or you can have another variable addition and add it and it will be like displaying another variable value addition

var addition = num1 + num2;
var sub = num1-num2;
var mul = num1*num2;
var div = num1/num2;
var reminder = num1%num2;

console.log("Addition of two numbers : " + addition);
console.log("Substraction of two numbers : " +sub);
console.log("Multiplication of two Numbers :" +mul);
console.log("Division of two numbers: " +div);
console.log("Reminder of two numbers:"+ reminder);