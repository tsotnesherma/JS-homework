let a,b,c;
a = (19*12)/2;
b = 1;
c= a+b;
document.getElementById("num-sum").innerHTML = c

// Statement
let x=(2+2)*2;
let y= 2;
let z= x-y;
document.getElementById("js").innerHTML=z

let name= "Tsotne";
let lastname="Shermadini";
console.log("Hello JavaScript! My name is" + name + lastname )

let array=[];
console.log(Array.isArray(array))
// Array
let string = "Tsotne Shermadini";  
document.getElementById("string").innerHTML = string;
// String

document.getElementById("boolean").innerHTML=Boolean(15>5); 
// Boolean

let person={
    firstame: "Tsotne",
    lastname: "Shermadini",
    age: "19",


}
document.getElementById("object").innerHTML= person.firstame+ person.lastname+ "is"+ person.age + "years old.";
// Object

function myFunc(){
    document.getElementById("fun").innerHTML="Hello World";
}

