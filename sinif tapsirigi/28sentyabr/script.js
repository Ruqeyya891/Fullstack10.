// task 1

let arr1 = [5, 10, 15, 20];
let arr2 = [15, 20, 25, 30];
let array3 = [...arr1, ...arr2];
let array4 = [...new Set(array3)];
array4.sort((a, b) => a - b);
console.log(array4);

// task2

let movies = ["Selena", "Bez bebek", "Joker", "Sihirli annem", "Kayip prenses"];
console.log("Filmlər:");

for (let i = 0; i < movies.length; i++) {
    console.log(`${i + 1}. ${movies[i]}`);
}

let movieNumber = Number(prompt("Film nömrəsini seçin:"));

while (movieNumber < 1 || movieNumber > movies.length) {
    movieNumber = Number(prompt("Yanlış nömrədir. Yenidən film nömrəsi seçin:"));
}

let selectedMovie = movies[movieNumber - 1]; //indexi hesablyir eger 1ci film secilibse indexi 0 olacaq ona gore 1 cixiriqki 0ci indexdeki filmi secmis olsun

let ticketCount = Number(prompt("Bilet sayını daxil edin:"));

let ticketPrice = Math.floor(Math.random() * 11) + 10;
let totalPrice = ticketPrice * ticketCount;

let discount = 0;
if (totalPrice > 50) {
    discount = totalPrice * 0.10;
}
let endPrice = totalPrice - discount;

console.log(`
Film: ${selectedMovie}
Bilet sayı: ${ticketCount}
Bir bilet: ${ticketPrice} AZN
Endirim: ${discount} AZN
Yekun: ${endPrice} AZN
`);