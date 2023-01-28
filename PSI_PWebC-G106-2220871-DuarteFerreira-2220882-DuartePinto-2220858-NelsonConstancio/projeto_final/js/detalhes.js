//KEY DA API --> 88393191c0b1f5ceb979a343f0d8f10e

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=88393191c0b1f5ceb979a343f0d8f10e //Link para testar se a api esta em funcionamento

//Variaveis e Seleção de Elementos

//api key
const apiKey ="88393191c0b1f5ceb979a343f0d8f10e";
//api bandeira api
const apiCountryFlag ="https://www.countryflagicons.com/FLAT/32/";  

const InputCidade = document.querySelector("#input-cidade");
const btnPesquisar = document.querySelector("#search");


//I
const elementoCidade = document.querySelector("#cidade");
const elementoIconPais = document.querySelector("#pais");

//Temperatura
const elementoTemperaturaAtual= document.querySelector("#temperaturaAtual span");
const elementoTemperaturaSentida = document.querySelector("#temperaturaSentida span");
const elementoTemperaturaMax = document.querySelector("#temperaturaMax span");
const elementoTemperaturaMin = document.querySelector("#temperaturaMin span");
//Pressao atmosférica
const elementoPressaoAtmos = document.querySelector("#pressaoAtmos span");
//Humidade
const elementoHumidade = document.querySelector("#humidade span");
//Vento
const elementoVento = document.querySelector("#ventoVelocidade span");
//Visibilidade
const elementoVisibilidade = document.querySelector ("#visibilidade span") ;
//Nuvens
const elementoNuvens = document.querySelector ("#nuvens span");
//direçã Vento
const elementoDireçãoVento = document.querySelector ("#direçaoVento span");
//Nascer do sol
const elementoNascerSol = document.querySelector ("#nascerSol span");

const elementoPorSol = document.querySelector ("#porSol span")
//Funções
//Função para pesquisa da cidade na api
const getWeatherData = async(cidade) => {


    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt`



const res = await fetch(apiWeatherURL);
const data = await res.json();

return data;
}


const mostrarTempo = async (cidade) => {
const data =  await  getWeatherData(cidade);    

//nome cidade
elementoCidade.innerHTML = data.name;
//bandeira pais
elementoIconPais.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
//temperatura
elementoTemperaturaAtual.innerHTML = parseInt  (data.main.temp);
elementoTemperaturaSentida.innerHTML = parseInt (data.main.feels_like);
elementoTemperaturaMax.innerHTML =  parseInt (data.main.temp_max);
elementoTemperaturaMin.innerHTML =  parseInt (data.main.temp_min);
//Pressão Atmosferica
elementoPressaoAtmos.innerHTML = data.main.pressure;
//Humidade
elementoHumidade.innerHTML = data.main.humidity;
//Vento
elementoVento.innerHTML =  data.wind.speed;
//Visibilidade
elementoVisibilidade.innerHTML = data.visibility;
//Nuvens
elementoNuvens.innerHTML = data.clouds.all;
//Direção Vento
elementoDireçãoVento.innerHTML =  data.wind.deg;

let timestamp = data.sys.sunrise;
let horas = new Date(timestamp*1000);

let hora = horas.getHours();
let minutos = horas.getMinutes();
let segundos = horas.getSeconds();

hora = checkTime(hora);
minutos = checkTime (minutos);
segundos = checkTime (segundos)


let time = `${hora}:${minutos}:${segundos}`;
console.log(time);

elementoNascerSol.innerHTML = time;






let tempo = data.sys.sunset;
let ola = new Date (tempo*1000);

let tempoh = ola.getHours();
let tempom = ola.getMinutes();
let tempos = ola.getSeconds();
tempom = checkTime(tempom);
tempos = checkTime (tempos);
tempoh = checkTime (tempoh)
let resultado = `${tempoh}:${tempom}:${tempos}`;
console.log(resultado);

elementoPorSol.innerHTML = resultado;




//função para colocar zeros se o numero das horas for a baixo de 10
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}






}



//evento para o botão pesquisar
btnPesquisar.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = InputCidade.value;


    mostrarTempo(cidade);
}) 


//PEsquisar se clicar no enter

InputCidade.addEventListener("keyup", (e) =>{

    if (e.code === "Enter"){
        const cidade = e.target.value;

        mostrarTempo(cidade);
    }



})