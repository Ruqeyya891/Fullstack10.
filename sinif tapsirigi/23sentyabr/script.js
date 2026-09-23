// task1
let userName = "ruqeyya"
let password = 18042008

if (userName === "ruqeyya") {
    console.log("Istifadeci adi dogrudur")
    if (password === 18042008) {
        console.log("Giris ugurludur")
    } else {
        console.log("Sifre yanlisdir")
    }
} else {
    console.log("Istifadeci adi yalnisdir")
}


// task2
// 1den 30a qeeder ededdlerin icinden tek ededleri console-a cixartmaq

for (let i = 1; i <= 30; i++)
    if (i % 2 === 1) {
        console.log(i);
    }

// task3
// Loop istifadə edərək 1-dən 100-ə qədər olan ədədlərin cəmini hesablayın.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Cəm:", sum);


// task4

while (true) {
    let product = Math.floor(Math.random() * 5) + 1;
    if (product === 1) {
        console.log("Telefon seçildi");
    } else if (product === 2) {
        console.log("Kompüter seçildi. Axtardığımız məhsulu tapdıq!");
        break;
    } else if (product === 3) {
        console.log("Qulaqlıq seçildi");
    } else if (product === 4) {
        console.log("Klaviatura seçildi");
    } else if (product === 5) {
        console.log("Mouse seçildi");
    }
}