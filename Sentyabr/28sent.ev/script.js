// task1

let numbers = [15, 9, 22, 10, 12, 3, 38, 1];
let filteredNumbers = numbers.filter(function (num) {
    if (num > 10) {
        return true;
    }else {
        return false;
    }
});
let newArray =filteredNumbers.map(function (num) {
    return num * 2;
});
console.log(newArray);

// task2
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let combinedArray = array1.concat(array2);

let array=[2,4,6,8,10,12,14,16,18,20,22,24];
let firstArr = array.slice(0,4);
let lastArr = array.slice(-4);
let newArray1 = [...firstArr , ...lastArr];
console.log(firstArr);
console.log(lastArr);
console.log(newArray1);

// task3

for(let i=100 ; i<=999 ; i++){
    if(i %10 ===0){
        console.log(i)
    }
}


