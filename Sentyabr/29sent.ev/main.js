// task 1

let text = prompt("Cumle daxil edin:");
console.log("cumledeki simvollarin sayi:", text.length);

// task2
let sentence = prompt("Cumle daxil edin:");
let boyuk = 0;
let kicik = 0;

for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== sentence[i].toLowerCase()) {
        boyuk++;
    } else {
        kicik++;
    }
}
console.log("Boyuk herflerin sayi:", boyuk);
console.log("Kicik herflerin sayi:", kicik);