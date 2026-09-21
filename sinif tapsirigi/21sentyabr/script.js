// task1

let number = prompt("Vergüllü ədəd daxil edin:");
let integerPart = parseInt(number);
console.log(integerPart);

// task2

let age = +(prompt("Yaşınızı daxil edin: "));
let newage = age + 5;

console.log(` Yaş: ${age} + 5 = ${newage}`);

// task3

let num = +(prompt("Ədəd daxil edin: "));
if (num > 0) {
    console.log("Ədəd müsbətdir");
}
else if (0 > num){
    console.log("Ədəd mənfidir");
}
else {
    console.log("Ədəd sıfırdır");
}