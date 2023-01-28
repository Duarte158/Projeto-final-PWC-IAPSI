const storageInput = document.querySelector("#input-cidade");
const butao = document.querySelector ("#search");
const output = document.querySelector ("#cidade");


output.innerHTML = localStorage.getItem("valor");
function save (){
localStorage.setItem('valor', storageInput.value);
}

function show (){
    output.innerHTML = localStorage.getItem("valor");

}

    butao.addEventListener('click', save);
    butao.addEventListener('click', show);


const apiKey ="88393191c0b1f5ceb979a343f0d8f10e";
const apiCountryFlag ="https://www.countryflagicons.com/FLAT/32/";





const elementoTemperatura = document.querySelector("#temperatura span");
const elementoDesc = document.querySelector("#descricao");
const elementoIconTempo = document.querySelector("#icon-tempo");
const elementoHumidade = document.querySelector("#humidade span");
const elementoVento = document.querySelector("#vento span");
const elementoIconPais = document.querySelector("#pais");


//Funções
//Função para pesquisa da cidade na api
const getWeatherData = async() => {
     const cidade = show();
    const apiWeatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt`

const res = await fetch(apiWeatherURL);
const data = await res.json();

return data;
}


const mostrarTempo = async (cidade) => {
const data =  await  getWeatherData(cidade);    




elementoDesc.innerText = data.weather[0].description;
elementoIconTempo.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
elementoIconPais.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
elementoHumidade.innerText = `${data.main.humidity}%`;
elementoVento.innerText =  `${data.wind.speed}km/h`;
}


butao.addEventListener("click", (e) => {
    e.preventDefault();


    mostrarTempo(cidade);
}) 