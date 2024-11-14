/* 
var age = 20;
age = 100;
console.log(age);


let rollNo = 21;
rollNo = 101;
console.log(rollNo);


const valuePi = 3.14;
console.log(valuePi); 


let age = 20;
console.log(age);


let userName = "Harry";
console.log(userName);

let pet = true;
console.log(pet);

let house = null;
console.log(house);

let bigNumber = 129023812934803489341n;
console.log(bigNumber);


let firstName = "Salma";
let lastName = "Saleh";
console.log(firstName , lastName)

let a = 100;
let b = 20;
console.log(a * b);

let a = 100;
let b = 20;
a = a + 10;
a **= 10; a= a ** 10;
console.log(a !=b);
*/

let house;
let number = 100;
if (number > 90){
    house = "Grade A";
    console.log(house);
}

else if(number > 80){
    house = 'Grade B';
    console.log(house);
}

else if(number > 70){
    house = 'Grade C';
    console.log(house);
}

else{
    house = "fail"
    console.log(house);
}

number > 90 ? "Grade A": "Fail";