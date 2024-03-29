let container = document.getElementById("countries-container");
let searchBox = document.getElementById("search-input");
let filter = document.getElementById("region");

let URL = "https://restcountries.com/v3.1/all";

fetch(URL)
  .then((response) => response.json())
  .then((data) => mostrarCountry(data));

function mostrarCountry(data) {
  data.forEach((element) => {
    let flag = element.flags.svg;
    let countryName = element.name.common;
    let capital = element.capital;
    let population = element.population;
    let region = element.region;

    const div = document.createElement("div");
    div.classList.add("container-country");
    div.innerHTML = `
    <div class="flag">
          <img
            src="${flag}"
            alt="Flag of ${countryName}"
          />
    </div>
    <div class="country-data">
          <h1 class="country-name">${countryName}</h1>
          <p>Population: <span class="country-population">${population}</span></p>
          <p>Region: <span class="country-region">${region}</span></p>
          <p>Capital: <span class="country-capital">${capital}</span></p>
    </div>
    `;
    container.appendChild(div);
  });
}

// searchBox
searchBox.addEventListener("input", (e) => {
  let value = e.target.value;

  let countries = document.querySelectorAll(".country-name");

  countries.forEach((element) => {
    if (element.innerText.toLowerCase().includes(value.toLowerCase())) {
      element.parentElement.parentElement.style.display = "block";
    } else {
      element.parentElement.parentElement.style.display = "none";
    }
  });
});

// filter
filter.addEventListener("change", (e) => {
  let value = e.target.value;
  let regions = document.querySelectorAll(".country-region");

  regions.forEach((element) => {
    if (value === "All") {
      element.parentElement.parentElement.parentElement.style.display = "block";
    }
    else if (element.innerText.toLowerCase().includes(value.toLowerCase())) {
      element.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      element.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});
