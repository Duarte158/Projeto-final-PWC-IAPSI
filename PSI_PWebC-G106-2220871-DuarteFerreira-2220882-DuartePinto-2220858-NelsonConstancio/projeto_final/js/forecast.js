const apiKey = "88393191c0b1f5ceb979a343f0d8f10e";

const InputCidade = document.querySelector("#input-cidade");
const btnPesquisar = document.querySelector("#search");
const apiCountryFlag = "https://www.countryflagicons.com/FLAT/32/";


const elementoCidade = document.querySelector("#cidade");


const elementoTemperaturaMax = document.querySelector("#tempmax span");
const elementoTemperaturaMin = document.querySelector("#tempmin span");
const elementoData = document.querySelector(".data");
const elementoIconTempo = document.querySelector("#img");
const elementoDesc = document.querySelector("#descricao");

const elementoTemperaturaMax2 = document.querySelector("#tempmax2 span");
const elementoTemperaturaMin2 = document.querySelector("#tempmin2 span");
const elementoData2 = document.querySelector(".data2");
const elementoIconTempo2 = document.querySelector("#img2");
const elementoDesc2 = document.querySelector("#descricao2");


const elementoTemperaturaMax3 = document.querySelector("#tempmax3 span");
const elementoTemperaturaMin3 = document.querySelector("#tempmin3 span");
const elementoData3 = document.querySelector(".data3");
const elementoIconTempo3 = document.querySelector("#img3");
const elementoDesc3 = document.querySelector("#descricao3");


const elementoTemperaturaMax4 = document.querySelector("#tempmax4 span");
const elementoTemperaturaMin4 = document.querySelector("#tempmin4 span");
const elementoData4 = document.querySelector(".data4");
const elementoIconTempo4 = document.querySelector("#img4");
const elementoDesc4 = document.querySelector("#descricao4");


const elementoTemperaturaMax5 = document.querySelector("#tempmax5 span");
const elementoTemperaturaMin5 = document.querySelector("#tempmin5 span");
const elementoData5 = document.querySelector(".data5");
const elementoIconTempo5 = document.querySelector("#img5");
const elementoDesc5 = document.querySelector("#descricao5");

//3 HORAS
const elementoTemperaturaMax3h = document.querySelector("#tempmax3h span");
const elementoTemperaturaMin3h = document.querySelector("#tempmin3h span");
const elementoData3h = document.querySelector(".data3h");
const elementoIconTempo3h = document.querySelector("#img3h");
const elementoDesc3h = document.querySelector("#descricao3h");

const elementoTemperaturaMax3h2 = document.querySelector("#tempmax3h2 span");
const elementoTemperaturaMin3h2 = document.querySelector("#tempmin3h2 span");
const elementoData3h2 = document.querySelector(".data3h2");
const elementoIconTempo3h2 = document.querySelector("#img3h2");
const elementoDesc3h2 = document.querySelector("#descricao3h2");

const elementoTemperaturaMax3h3 = document.querySelector("#tempmax3h3 span");
const elementoTemperaturaMin3h3 = document.querySelector("#tempmin3h3 span");
const elementoData3h3 = document.querySelector(".data3h3");
const elementoIconTempo3h3 = document.querySelector("#img3h3");
const elementoDesc3h3= document.querySelector("#descricao3h3");


const elementoTemperaturaMax3h4 = document.querySelector("#tempmax3h4 span");
const elementoTemperaturaMin3h4 = document.querySelector("#tempmin3h4 span");
const elementoData3h4 = document.querySelector(".data3h4");
const elementoIconTempo3h4 = document.querySelector("#img3h4");
const elementoDesc3h4= document.querySelector("#descricao3h4");


const elementoTemperaturaMax3h5 = document.querySelector("#tempmax3h5 span");
const elementoTemperaturaMin3h5 = document.querySelector("#tempmin3h5 span");
const elementoData3h5 = document.querySelector(".data3h5");
const elementoIconTempo3h5 = document.querySelector("#img3h5");
const elementoDesc3h5 = document.querySelector("#descricao3h5");




const lat = document.getElementById("lat");
const long = document.getElementById("lon");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    mostrarTempo1(latitude, longitude);
}

const getWeatherData1 = async (latitude, longitude) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=pt`
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}
const mostrarTempo1 = async (latitude, longitude) => {
    const data = await getWeatherData1(latitude, longitude);

    elementoCidade.innerText = data.city.name;

    elementoTemperaturaMax.innerHTML = Math.floor(data.list[0].main.temp_max);
    elementoTemperaturaMin.innerHTML = Math.floor(data.list[0].main.temp_min);
    elementoData.innerHTML = new Date(data.list[0].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc.innerHTML = (data.list[0].weather[0].description);
    elementoIconTempo.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);


    elementoTemperaturaMax2.innerHTML = Math.floor(data.list[8].main.temp_max);
    elementoTemperaturaMin2.innerHTML = Math.floor(data.list[8].main.temp_min);
    elementoData2.innerHTML = new Date(data.list[8].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc2.innerHTML = (data.list[8].weather[0].description);
    elementoIconTempo2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`);


    elementoTemperaturaMax3.innerHTML = Math.floor(data.list[16].main.temp_max);
    elementoTemperaturaMin3.innerHTML = Math.floor(data.list[16].main.temp_min);
    elementoData3.innerHTML = new Date(data.list[16].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc3.innerHTML = (data.list[16].weather[0].description);
    elementoIconTempo3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`);


    elementoTemperaturaMax4.innerHTML = Math.floor(data.list[24].main.temp_max);
    elementoTemperaturaMin4.innerHTML = Math.floor(data.list[24].main.temp_min);
    elementoData4.innerHTML = new Date(data.list[24].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc4.innerHTML = (data.list[24].weather[0].description);
    elementoIconTempo4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`);


    elementoTemperaturaMax5.innerHTML = Math.floor(data.list[32].main.temp_max);
    elementoTemperaturaMin5.innerHTML = Math.floor(data.list[32].main.temp_min);
    elementoData5.innerHTML = new Date(data.list[32].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc5.innerHTML = (data.list[32].weather[0].description);
    elementoIconTempo5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`);

//HORAS

    elementoTemperaturaMax3h.innerHTML = Math.floor(data.list[1].main.temp_max);
    elementoTemperaturaMin3h.innerHTML = Math.floor(data.list[1].main.temp_min);
    elementoData3h.innerHTML = data.list[1].dt_txt;
    elementoDesc3h.innerHTML = (data.list[1].weather[0].description);
    elementoIconTempo3h.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);

    elementoTemperaturaMax3h2.innerHTML = Math.floor(data.list[2].main.temp_max);
    elementoTemperaturaMin3h2.innerHTML = Math.floor(data.list[2].main.temp_min);
    elementoData3h2.innerHTML = data.list[2].dt_txt;
    elementoDesc3h2.innerHTML = (data.list[2].weather[0].description);
    elementoIconTempo3h2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);

    elementoTemperaturaMax3h3.innerHTML = Math.floor(data.list[3].main.temp_max);
    elementoTemperaturaMin3h3.innerHTML = Math.floor(data.list[3].main.temp_min);
    elementoData3h3.innerHTML = data.list[3].dt_txt;
    elementoDesc3h3.innerHTML = (data.list[3].weather[0].description);
    elementoIconTempo3h3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);

    elementoTemperaturaMax3h4.innerHTML = Math.floor(data.list[4].main.temp_max);
    elementoTemperaturaMin3h4.innerHTML = Math.floor(data.list[4].main.temp_min);
    elementoData3h4.innerHTML = data.list[4].dt_txt;
    elementoDesc3h4.innerHTML = (data.list[4].weather[0].description);
    elementoIconTempo3h4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);

    elementoTemperaturaMax3h5.innerHTML = Math.floor(data.list[5].main.temp_max);
    elementoTemperaturaMin3h5.innerHTML = Math.floor(data.list[5].main.temp_min);
    elementoData3h5.innerHTML = data.list[5].dt_txt;
    elementoDesc3h5.innerHTML = (data.list[5].weather[0].description);
    elementoIconTempo3h5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`);

}

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&appid=${apiKey}&lang=pt`)
    .then(res => {
        return res.json();
    })

    .then(data => {

        elementoCidade.innerText = data.city.name;

        elementoTemperaturaMax.innerHTML = Math.floor(data.list[0].main.temp_max);
        elementoTemperaturaMin.innerHTML = Math.floor(data.list[0].main.temp_min);
        elementoData.innerHTML = new Date(data.list[0].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
        elementoDesc.innerHTML = (data.list[0].weather[0].description);
        elementoIconTempo.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);


        elementoTemperaturaMax2.innerHTML = Math.floor(data.list[8].main.temp_max);
        elementoTemperaturaMin2.innerHTML = Math.floor(data.list[8].main.temp_min);
        elementoData2.innerHTML = new Date(data.list[8].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
        elementoDesc2.innerHTML = (data.list[8].weather[0].description);
        elementoIconTempo2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`);


        elementoTemperaturaMax3.innerHTML = Math.floor(data.list[16].main.temp_max);
        elementoTemperaturaMin3.innerHTML = Math.floor(data.list[16].main.temp_min);
        elementoData3.innerHTML = new Date(data.list[16].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
        elementoDesc3.innerHTML = (data.list[16].weather[0].description);
        elementoIconTempo3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`);

        elementoTemperaturaMax4.innerHTML = Math.floor(data.list[24].main.temp_max);
        elementoTemperaturaMin4.innerHTML = Math.floor(data.list[24].main.temp_min);
        elementoData4.innerHTML = new Date(data.list[24].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
        elementoDesc4.innerHTML = (data.list[24].weather[0].description);
        elementoIconTempo4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`);


        elementoTemperaturaMax5.innerHTML = Math.floor(data.list[32].main.temp_max);
        elementoTemperaturaMin5.innerHTML = Math.floor(data.list[32].main.temp_min);
        elementoData5.innerHTML = new Date(data.list[32].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
        elementoDesc5.innerHTML = (data.list[32].weather[0].description);
        elementoIconTempo5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`);



        elementoTemperaturaMax3h.innerHTML = Math.floor(data.list[1].main.temp_max);
        elementoTemperaturaMin3h.innerHTML = Math.floor(data.list[1].main.temp_min);
        elementoData3h.innerHTML = data.list[1].dt_txt;
        elementoDesc3h.innerHTML = (data.list[1].weather[0].description);
        elementoIconTempo3h.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);
    
        elementoTemperaturaMax3h2.innerHTML = Math.floor(data.list[2].main.temp_max);
        elementoTemperaturaMin3h2.innerHTML = Math.floor(data.list[2].main.temp_min);
        elementoData3h2.innerHTML = data.list[2].dt_txt;
        elementoDesc3h2.innerHTML = (data.list[2].weather[0].description);
        elementoIconTempo3h2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);
    
        elementoTemperaturaMax3h3.innerHTML = Math.floor(data.list[3].main.temp_max);
        elementoTemperaturaMin3h3.innerHTML = Math.floor(data.list[3].main.temp_min);
        elementoData3h3.innerHTML = data.list[3].dt_txt;
        elementoDesc3h3.innerHTML = (data.list[3].weather[0].description);
        elementoIconTempo3h3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);
    
        elementoTemperaturaMax3h4.innerHTML = Math.floor(data.list[4].main.temp_max);
        elementoTemperaturaMin3h4.innerHTML = Math.floor(data.list[4].main.temp_min);
        elementoData3h4.innerHTML = data.list[4].dt_txt;
        elementoDesc3h4.innerHTML = (data.list[4].weather[0].description);
        elementoIconTempo3h4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);
    
        elementoTemperaturaMax3h5.innerHTML = Math.floor(data.list[5].main.temp_max);
        elementoTemperaturaMin3h5.innerHTML = Math.floor(data.list[5].main.temp_min);
        elementoData3h5.innerHTML = data.list[5].dt_txt;
        elementoDesc3h5.innerHTML = (data.list[5].weather[0].description);
        elementoIconTempo3h5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`);


    })



const getWeatherData = async (cidade) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=metric&appid=${apiKey}&lang=pt`
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}


const mostrarTempo = async (cidade) => {
    const data = await getWeatherData(cidade);

    elementoCidade.innerText = data.city.name;

    elementoTemperaturaMax.innerHTML = Math.floor(data.list[0].main.temp_max);
    elementoTemperaturaMin.innerHTML = Math.floor(data.list[0].main.temp_min);
    elementoData.innerHTML = new Date(data.list[0].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc.innerHTML = (data.list[0].weather[0].description);
    elementoIconTempo.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);


    elementoTemperaturaMax2.innerHTML = Math.floor(data.list[8].main.temp_max);
    elementoTemperaturaMin2.innerHTML = Math.floor(data.list[8].main.temp_min);
    elementoData2.innerHTML = new Date(data.list[8].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc2.innerHTML = (data.list[8].weather[0].description);
    elementoIconTempo2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`);


    elementoTemperaturaMax3.innerHTML = Math.floor(data.list[16].main.temp_max);
    elementoTemperaturaMin3.innerHTML = Math.floor(data.list[16].main.temp_min);
    elementoData3.innerHTML = new Date(data.list[16].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc3.innerHTML = (data.list[16].weather[0].description);
    elementoIconTempo3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`);


    elementoTemperaturaMax4.innerHTML = Math.floor(data.list[24].main.temp_max);
    elementoTemperaturaMin4.innerHTML = Math.floor(data.list[24].main.temp_min);
    elementoData4.innerHTML = new Date(data.list[24].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc4.innerHTML = (data.list[24].weather[0].description);
    elementoIconTempo4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`);


    elementoTemperaturaMax5.innerHTML = Math.floor(data.list[32].main.temp_max);
    elementoTemperaturaMin5.innerHTML = Math.floor(data.list[32].main.temp_min);
    elementoData5.innerHTML = new Date(data.list[32].dt * 1000).toDateString(undefined, 'Asia/Kilkata');
    elementoDesc5.innerHTML = (data.list[32].weather[0].description);
    elementoIconTempo5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`);




    elementoTemperaturaMax3h.innerHTML = Math.floor(data.list[1].main.temp_max);
    elementoTemperaturaMin3h.innerHTML = Math.floor(data.list[1].main.temp_min);
    elementoData3h.innerHTML = data.list[1].dt_txt;
    elementoDesc3h.innerHTML = (data.list[1].weather[0].description);
    elementoIconTempo3h.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);

    elementoTemperaturaMax3h2.innerHTML = Math.floor(data.list[2].main.temp_max);
    elementoTemperaturaMin3h2.innerHTML = Math.floor(data.list[2].main.temp_min);
    elementoData3h2.innerHTML = data.list[2].dt_txt;
    elementoDesc3h2.innerHTML = (data.list[2].weather[0].description);
    elementoIconTempo3h2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);

    elementoTemperaturaMax3h3.innerHTML = Math.floor(data.list[3].main.temp_max);
    elementoTemperaturaMin3h3.innerHTML = Math.floor(data.list[3].main.temp_min);
    elementoData3h3.innerHTML = data.list[3].dt_txt;
    elementoDesc3h3.innerHTML = (data.list[3].weather[0].description);
    elementoIconTempo3h3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);

    elementoTemperaturaMax3h4.innerHTML = Math.floor(data.list[4].main.temp_max);
    elementoTemperaturaMin3h4.innerHTML = Math.floor(data.list[4].main.temp_min);
    elementoData3h4.innerHTML = data.list[4].dt_txt;
    elementoDesc3h4.innerHTML = (data.list[4].weather[0].description);
    elementoIconTempo3h4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);

    elementoTemperaturaMax3h5.innerHTML = Math.floor(data.list[5].main.temp_max);
    elementoTemperaturaMin3h5.innerHTML = Math.floor(data.list[5].main.temp_min);
    elementoData3h5.innerHTML = data.list[5].dt_txt;
    elementoDesc3h5.innerHTML = (data.list[5].weather[0].description);
    elementoIconTempo3h5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`);
}

//Eventos
//Verificação para funcionamento do botão pesquisar
btnPesquisar.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = InputCidade.value;


    mostrarTempo(cidade);
})

//PEsquisar se clicar no enter

InputCidade.addEventListener("keyup", (e) => {

    if (e.code === "Enter") {
        const cidade = e.target.value;

        mostrarTempo(cidade);
    }



})



//CÓDIGO PARA AS 3 HORAS