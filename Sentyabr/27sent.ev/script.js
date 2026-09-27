// task1

let numbers = [8, 4, 6, 3, 10, 19, 2, 5];
let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Arraydaki en boyuk eded:", max);
console.log("Arraydaki en kicik eded:", min);


// task2 /


let students = ["Nigar", "Nicat", "Aynur", "Sevinc",  "Aysu", "Nahid", "Nurlan", "Feyruz"];

// 1
let studentName = prompt("Telebenin adini daxil edin:");
let index = students.indexOf(studentName);

if (index !== -1) {
    students.splice(index, 1);
    console.log("Telebe silindi:", studentName);
} else {
    console.log("Telebe tapilmadi");
}

// 2

let studentCheck = prompt("Yoxlanilacaq Telebenin adini daxil edin:");

if (students.includes(studentCheck)) {
    console.log("bu telebe movcuddur:", studentCheck);
} else {
    console.log("bu telebe yoxdur");
}

// 3

let newStudents = ["Ruqeyya", "Nurcan", "Elmir", "Elnur"];
students = students.concat(newStudents);
console.log(`Yeni telebeler elave olundu:`, `${newStudents}`);

// 4
for (let i = 0; i < students.length; i++) {
    console.log(`${i+1}. ${students[i]}`);
}