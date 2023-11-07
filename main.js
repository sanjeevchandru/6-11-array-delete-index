document.write("Delete any one element in an array"+"<br>");
document.write("--------------------------------------"+"<br>");

let arr=[11,22,33,-99,44,55,66,77,88,99];
let a=prompt("array length :"+arr.length+" Enter a index position :");
document.write("The array elements are : "+arr+"<br>");
let x=arr.splice(a,1);

document.write("The deleted element is:"+x+"<br>");
document.write("The remining array elements"+arr);