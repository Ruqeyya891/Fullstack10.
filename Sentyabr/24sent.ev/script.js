// task1
let randomReqem = Math.floor(Math.random() * 100) + 1;

while (true) {
    let texminiReqem = Number(prompt("1-100 arasindan bir eded texmin edin:"));
    if (texminiReqem > randomReqem) {
        console.log("Daha kicik eded yoxla");
    } else if (texminiReqem < randomReqem) {
        console.log("Daha boyuk eded yoxla");
    } else {
        console.log("Tebrikler!");
        break;
    }
}

// task2

let num = 1;
for (let i = 1; i <= 20; i++) {
    num = num * i;
}
console.log("Hasil:", num);

// task3

let n = Number(prompt(" n ededini daxil edin:"))
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 4 === 0) {
        continue;
    }
    sum = sum + i;
}
console.log("Cem:", sum);



// task4

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
        count++;
    }
    if (count === 10) {
        break;
    }
}

// task5

let isRunning = true;
let count1 = 0;
while (isRunning) {
    let word = prompt("Söz daxil edin: ");
    if (word === "stop") {
        isRunning = false;
    } else {
        count1++;
    }
}
console.log("Daxil edilen sozlerin sayi:", count1);



// task6

let a = Number(prompt("1ci terefi daxil edin:"));
let b = Number(prompt("2ci terefi daxil edin:"));
let c = Number(prompt("3cu terefi daxil edin:"));

if (a + b > c && a + c > b && b + c > a) {
    console.log("bu tereflerle ucbucaq qurmaq mumkundur")
} else {
    console.log("bu tereflerle ucbucaq qurmaq mumkun deyil")
}