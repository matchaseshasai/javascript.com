/*
console.log("Printing using for Loop ");
for (var num = 1;num<=10 ; num++){
        console.log(num);
}

var num = 1 ;
while(num<=10){
    console.log(num);
    num = num+1;
}

var num2=1;
console.log("Odd Numbers between 1 to 20 : ");
while (num2<=20){
    console.log(num2);
    num2 = num2 + 2;
}
*/
var arr1=[4,5,6,7,8,9,10,"Hello"];

console.log("Printing all the numbers of the Array using for each loop : ");
for (var num of arr1){
    console.log(num);
}
