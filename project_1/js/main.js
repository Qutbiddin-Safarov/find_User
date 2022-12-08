let birthYear = prompt("Enter your birth year");
let value = 2022 - birthYear;

if (birthYear > 1900){
    alert("your age: " + value)
}else{
    alert("it's not true");
}

let num = prompt("Enter number: ");
let res = num % 2 == 0;

alert(res);