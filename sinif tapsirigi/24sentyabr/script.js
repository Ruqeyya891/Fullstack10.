// loop task1

let number = Number(prompt("Ədəd daxil edin:"));

let count = 0;

while (number > 0) {

    number = Math.floor(number / 10);
    count++;

}

console.log("Ədəd", count, "rəqəmdən ibarətdir.");

// array task1

let fruits = ["phone", "cloth", "drink", "meal"];

console.log(fruits[0]);

console.log(fruits[3]);

console.log(fruits[1]);


// array task2

let frontend = ["HTML", "Css", "JavaScript", "React", "TypeScript"];

let index = frontend.indexOf("React");

if (index !== -1) {

    console.log("React sözünün indexi:", index);

} else {

    console.log("tapılmadı");

}


// task3

let numbers = [2, 4, 6, 8, 10];

let squares = [];

for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] ** 2;
    squares.push(square);
}

console.log(squares);


// task4

let products = ["Telefon", "Komputer", "Qulaqlıq", "Klaviatura", "Mouse"];
let cart = [];

for (let i = 0; i < 3; i++) {
    let product = prompt("Məhsul adı daxil edin:");

    if (products.includes(product)) {
        cart.push(product);
    }
}
console.log("Səbət:");
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}

//  task5

let ededler = [10, -5, 8, -12, 20, -3, 7];
for (let i = 0; i < ededler.length; i++) {
    if (ededler[i] < 0) {
        console.log(ededler[i]);
    }
}