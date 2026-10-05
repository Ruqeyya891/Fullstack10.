let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.style.border = "3px solid red";
        box.style.width = "200px";
    });
});