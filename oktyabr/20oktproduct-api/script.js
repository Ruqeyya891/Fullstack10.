const productsContainer = document.getElementById("products");
const sortSelect = document.getElementById("sortSelect");

let products = [];
async function getProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Məhsulları əldə etmək mümkün olmadı");
        }

        products = await response.json();

        displayProducts(products);
    } catch (error) {
        productsContainer.textContent =
            "Məhsullar yüklənərkən xəta baş verdi.";
        console.error(error);
    }
}

function displayProducts(productList) {
    productsContainer.innerHTML = "";

    productList.forEach(function (product) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;

        productsContainer.appendChild(productCard);
    });
}


sortSelect.addEventListener("change", function () {
    let sortedProducts = [...products];

    if (sortSelect.value === "asc") {
        sortedProducts.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortSelect.value === "desc") {
        sortedProducts.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    displayProducts(sortedProducts);
});

getProducts();