const countriesContainer = document.getElementById('countries');
const searchInput = document.getElementById('searchInput');
const regionSelect = document.getElementById('regionSelect');
const themeToggle = document.getElementById('themeToggle');

let allCountries = [];

fetch("countries.json").then(response => {
    if (!response.ok) {
        throw new Error("Ölkələr tapılmadı");
    }
    return response.json();
})

    .then(data => {
        allCountries = data;
        filterCountries();
    }).catch(error => {
        console.error("Xeta:", error);

        countriesContainer.innerHTML = "<p>Ölkələri yuklemek mümkün olmadı . Json faylını yoxla"
    })


function renderCountries(countries) {
    countriesContainer.innerHTML = "";

    if (countries.length === 0) {
        countriesContainer.innerHTML = "<p>Ölkə tapılmadı!</p>";
        return;
    }

    countries.forEach(country => {
        const div = document.createElement("div");
        div.className = "country";

        div.innerHTML = `
            <img
                src="${country.flag}"
                alt="${country.name} bayrağı"
                loading="lazy"
            >

            <div class="country-info">
                <h3>${country.name}</h3>
                <p><b>Population:</b> ${
                    country.population != null
                        ? Number(country.population).toLocaleString()
                        : "N/A"
                }</p>
                <p><b>Region:</b> ${country.region || "N/A"}</p>
                <p><b>Capital:</b> ${country.capital || "N/A"}</p>
            </div>
        `;

        countriesContainer.appendChild(div);
    });
}

function filterCountries() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedRegion = regionSelect.value;

    const filteredCountries = allCountries.filter(country => {
        const matchesName = country.name
            .toLowerCase()
            .includes(searchValue);

        const matchesRegion =
            selectedRegion === "" ||
            country.region === selectedRegion;

        return matchesName && matchesRegion;
    });

    renderCountries(filteredCountries);
}

searchInput.addEventListener("input", filterCountries);

regionSelect.addEventListener("change", filterCountries);


function updateThemeButton() {
    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark
        ? " Light Mode"
        : " Dark Mode";
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeButton();
});