
// task1

let month = Number(prompt("Ay nömrəsini daxil edin: "));
switch (month) {
    case 1:
        console.log("Yanvar");
        break;
    case 2:
        console.log("Fevral");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("Aprel");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("İyun");
        break;

    case 7:
        console.log("İyul");
        break;
    case 8:
        console.log("Avqust");
        break;
    case 9:
        console.log("Sentyabr");
        break;
    case 10:
        console.log("Oktyabr");
        break;
    case 11:
        console.log("Noyabr");
        break;
    case 12:
        console.log("Dekabr");
        break;
}

// task 2

let productName = prompt("Məhsulun adını daxil edin: ");
let price = Number(prompt("Məhsulun qiymətini daxil edin: "));
let count = Number(prompt("Məhsulun sayını daxil edin: "));
let total = price * count;
let discount = 0;
if (total >= 100) {
    discount = total * 0.10;
}

let endPrice = total - discount;
endPrice = Math.round(endPrice);

console.log(
    `Mehsulun adi: ${productName}
    Mehsulun qiymeti :${price} Azn
    Mehsulun sayi :${count}
    Umumi meblegi:${total}Azn
    Endirim:${discount}Azn
    Yekun mebleg:${endPrice}Azn`
);


// task3

let firstexamscore = Number(prompt("Birinci imtahan balını daxil edin: "));
let secondexamscore = Number(prompt("İkinci imtahan balını daxil edin: "));
let thirdexamscore = Number(prompt("Üçüncü imtahan balını daxil edin: "));
let averqageScore = (firstexamscore + secondexamscore + thirdexamscore) / 3;
average = Number(averqageScore.toFixed(2));
let result;
if (average >= 90) {
    result = "ela";
}
else if (average >= 70) {
    result = "yaxsi";
}
else if (average >= 50) {
    result = "kafi";
}
else {
    result = "kesildi";
}

console.log(`
    1-ci imtahan balı: ${firstexamscore}
    2-ci imtahan balı: ${secondexamscore}
    3-cü imtahan balı: ${thirdexamscore}
    Ortalama: ${average}
    Nəticə: ${result}`);


// taks4

let radius = Number(prompt("Radiusu daxil edin:"));
let area = Math.PI * radius ** 2;
console.log("Çevrənin sahəsi:", area);