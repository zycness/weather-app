const inputClima = document.querySelector("#climaInput");
const submitBtn = document.querySelector("#submitClima");
const result = document.querySelector("#result-container");
const text = document.querySelector("#text");
const text1 = document.querySelector("#text1");
const pais = document.querySelector("#pais");

const api_key = "7fccf964410c688f356c391b886514d4";

solicitudApi = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pais.innerText = data.name;
      text.innerText = "Temperatura "+ data.main.temp + " C°";
      text1.innerText = "Humedad " + data.main.humidity + " %";
    })
    .catch((error) => {
      if (pais.innerText == "undefined") {
        pais.innerText = "";
        text.innerText = "";
        text1.innerText = "";
      }
      return alert("País incorrecto");
    });
};

submitBtn.addEventListener("click", () => {
  let inputValue = inputClima.value;
  if (inputValue == "") {
    alert("introduzca un país");
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&lang=es&appid=${api_key}&units=metric`;
    solicitudApi(url);
  }
});
