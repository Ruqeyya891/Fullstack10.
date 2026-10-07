const count = document.getElementById("count");
const btn = document.getElementById("btn");
let counter = 5;
 const interval = setInterval(()=>{
    counter--;
    count.textContent = counter;
    if(counter === 0){
        clearInterval(interval);
        count.textContent ="Hazir!";
        btn.disabled = false;
    }
 },1000);

 btn.addEventListener("click",()=>{
count.textContent ="Kod Gonderildi!";
btn.disabled=true;

setTimeout(()=>{
    count.textContent ="Hazir!";
    btn.disabled=false;
},2000)
 })



 