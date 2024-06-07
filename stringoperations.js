var str1 = "Clean world";
var str2 = "Green World !!!";

//Strin concatenation
var result = str1.concat(str2);
console.log("Concatenation of two strings : "+ result);
console.log("Concatenation of String way2 :"+ str1+str2);

//Length 
console.log(str1.length);

//To Upper Case
console.log(str1.toUpperCase());

//TO Lower Case 
console.log(str1.toLowerCase());

//replace 
console.log(str1.replace("world","India"));

//CharAt
console.log(str1.charAt(0));

//charcodeAt
console.log(str1.charCodeAt(4));

//FInd total number of words

var array = str1.split(" ");
console.log(array);
console.log(array.length);
console.log(str1.split(' ')[1]);

//Index Of a character
console.log(str1.indexOf('l'));

//lastIndexOf
console.log(str1.lastIndexOf('l'));

//slice
console.log(str1.slice(3,7));



