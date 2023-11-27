const cards = document.querySelector(".cards");
const backdrop = document.querySelector(".backdrop");
const loader = document.querySelector(".loader");
const input = document.getElementById("input");

function davlat(API) {
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      backdrop.classList.toggle("d-n");
      loader.classList.toggle("d-n");
      console.log(data);
      data.data.forEach((child) => {
        cards.innerHTML += `
            <div class="card" style="">
            <img src=${child.flags.svg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${child.name.common}</h5></h5>
              <p class="card-text">
               odamlar soni ${child.population}
               </br>
                regioni ${child.region}
              </p>
            </div>
          </div>`;
      });
    });
}

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  fetch(
    `https://countries-api-v7sn.onrender.com/countries?search=${e.target.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      cards.innerHTML = ""
      data.data.forEach((child) => {
        cards.innerHTML += `
            <div class="card" style="">
            <img src=${child.flags.svg} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${child.name.common}</h5></h5>
              <p class="card-text">
               odamlar soni ${child.population}
               </br>
                regioni ${child.region}
              </p>
            </div>
          </div>`;
      });
    });
});

davlat("https://countries-api-v7sn.onrender.com/countries?limit=250");
