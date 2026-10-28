let container = document.querySelector(".container");
let nameInput = document.querySelector("#nameInput");
let surnameInput = document.querySelector("#surnameInput");
let ageInput = document.querySelector("#ageInput");
let btn = document.querySelector("#createBtn");
let editingUserId = null;
let isEditing = false;

async function getAllProducts() {
    try {
        let res = await fetch("http://localhost:8000/users");

        if (!res.ok) {
            throw new Error("Məlumatlar gətirilmədi");
        }

        let data = await res.json();
        container.innerHTML = "";

        data.forEach((element) => {
            let box = document.createElement("div");
            let h3 = document.createElement("h3");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            let editBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");

            h3.textContent = element.name;
            h4.textContent = element.surname;
            p.textContent = `Yaş: ${element.age}`;

            editBtn.textContent = "Edit";
            deleteBtn.textContent = "Sil";
            box.classList.add("user-card");
            editBtn.classList.add("edit-btn");
            deleteBtn.classList.add("delete-btn");

            editBtn.addEventListener("click", () => {
                nameInput.value = element.name;
                surnameInput.value = element.surname;
                ageInput.value = element.age;
                editingUserId = element.id;
                isEditing = true;
                btn.textContent = "Save";
                nameInput.focus();
            });

            deleteBtn.addEventListener("click", async () => {
                await deleteUser(element.id);
            });

            box.append(h3, h4, p, editBtn, deleteBtn);

            container.append(box);
        });
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener("click", async () => {
    let name = nameInput.value.trim();
    let surname = surnameInput.value.trim();
    let age = ageInput.value.trim();

    if (name === "" || surname === "" || age === "") {
        alert("Bütün xanaları doldur!");
        return;
    }

    let numericAge = Number(age);

    if (!Number.isFinite(numericAge) || numericAge <= 0) {
        alert("Yaşı düzgün daxil et!");
        return;
    }

    let payload = {
        name: name,
        surname: surname,
        age: numericAge,
    };

    if (isEditing) {
        await updateUser(editingUserId, payload);
    } else {
        try {
            let res = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error("İstifadəçi yaradılmadı");
            }

            await res.json();

            resetForm();
            await getAllProducts();
        } catch (error) {
            console.log(error);
            alert("İstifadəçi yaradılarkən xəta baş verdi!");
        }
    }
});

async function updateUser(id, updatedUser) {
    try {
        let res = await fetch(`http://localhost:8000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        });

        if (!res.ok) {
            throw new Error("İstifadəçi yenilənmədi");
        }

        await res.json();

        resetForm();
        await getAllProducts();

    } catch (error) {
        console.log(error);
        alert("İstifadəçi yenilənərkən xəta baş verdi!");
    }
}

async function deleteUser(id) {
    try {
        let res = await fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            throw new Error("İstifadəçi silinmədi");
        }
        await getAllProducts();
    } catch (error) {
        console.log(error);
    }
}

function resetForm() {
    nameInput.value = "";
    surnameInput.value = "";
    ageInput.value = "";
    editingUserId = null;
    isEditing = false;
    btn.textContent = "Create User";
}

getAllProducts();