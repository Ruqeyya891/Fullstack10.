const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#count");
const addBtn = document.querySelector("#addBtn");

function updateCount() {
    count.textContent = todoList.children.length;
}

function createTodo(text) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = text;

    const actions = document.createElement("div");
    actions.classList.add("todo-actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";


    editBtn.addEventListener("click", function () {
        const newText = prompt(
            "Tapşırığı yenilə:",
            span.textContent
        );

        if (newText === null) {
            return;
        }

        if (newText.trim() === "") {
            alert("Tapşırıq boş ola bilməz!");
            return;
        }

        span.textContent = newText.trim();
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    actions.append(editBtn, deleteBtn);
    li.append(span, actions);

    todoList.append(li);

    updateCount();
}

addBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Zəhmət olmasa tapşırıq yaz!");
        return;
    }

    createTodo(text);
    todoInput.value = "";
    todoInput.focus();
});

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }


});

updateCount();


