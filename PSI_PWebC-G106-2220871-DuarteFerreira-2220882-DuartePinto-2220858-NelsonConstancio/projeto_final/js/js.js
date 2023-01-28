//KEY DA API --> 88393191c0b1f5ceb979a343f0d8f10e

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=88393191c0b1f5ceb979a343f0d8f10e //Link para testar se a api esta em funcionamento

//Variaveis e Seleção de Elementos
const apiKey ="88393191c0b1f5ceb979a343f0d8f10e";
const apiCountryFlag ="https://www.countryflagicons.com/FLAT/32/";

const InputCidade = document.querySelector("#input-cidade");
const btnPesquisar = document.querySelector("#search");



const elementoCidade = document.querySelector("#cidade");
const elementoTemperatura = document.querySelector("#temperatura span");
const elementoDesc = document.querySelector("#descricao");
const elementoIconTempo = document.querySelector("#icon-tempo");
const elementoHumidade = document.querySelector("#humidade span");
const elementoVento = document.querySelector("#vento span");
const elementoIconPais = document.querySelector("#pais");


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


elementoCidade.innerText = data.name;
elementoTemperatura.innerText = parseInt  (data.main.temp);
elementoDesc.innerText = data.weather[0].description;
elementoIconTempo.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
elementoIconPais.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
elementoHumidade.innerText = `${data.main.humidity}%`;
elementoVento.innerText =  `${data.wind.speed}km/h`;
}


//Eventos
//Verificação para funcionamento do botão pesquisar
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




//FIM DA LIGAÇÃO API POR PESQUISA









//INICIO LIGAÇÃO API CIDADE UNICA



//LONDRES
const elementoCidadelondres = document.querySelector("#cidadelondres");
const elementoTemperaturalondres = document.querySelector("#temperaturalondres span");
const elementoDesclondres = document.querySelector("#descricaolondres");
const elementoIconTempolondres = document.querySelector("#icon-tempolondres");
const elementoHumidadelondres = document.querySelector("#humidadelondres span");
const elementoVentolondres = document.querySelector("#ventolondres span");
const elementoIconPaislondres = document.querySelector("#paislondres");

fetch (`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${apiKey}&lang=pt`)
    .then (res =>{

        return res.json();

    })

    .then(data =>{
        
        
        elementoCidadelondres.innerHTML = data.name;
        elementoTemperaturalondres.innerHTML = parseInt (data.main.temp);
        elementoDesclondres.innerHTML = data.weather[0].description;
        elementoIconTempolondres.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        elementoIconPaislondres.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
        elementoHumidadelondres.innerHTML = `${data.main.humidity}%`;
        elementoVentolondres.innerHTML =  `${data.wind.speed}km/h`;
        

    })



//LISBOA
const elementoCidadelisboa = document.querySelector("#cidadelisboa");
const elementoTemperaturalisboa = document.querySelector("#temperaturalisboa span");
const elementoDesclisboa = document.querySelector("#descricaolisboa");
const elementoIconTempolisboa = document.querySelector("#icon-tempolisboa");
const elementoHumidadelisboa = document.querySelector("#humidadelisboa span");
const elementoVentolisboa = document.querySelector("#ventolisboa span");
const elementoIconPaislisboa = document.querySelector("#paislisboa");

fetch (`https://api.openweathermap.org/data/2.5/weather?q=lisbon&units=metric&appid=${apiKey}&lang=pt`)
    .then (res =>{

        return res.json();

    })

    .then(data =>{
        
        
        elementoCidadelisboa.innerText = data.name;
        elementoTemperaturalisboa.innerText = parseInt  (data.main.temp);
        elementoDesclisboa.innerText = data.weather[0].description;
        elementoIconTempolisboa.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        elementoIconPaislisboa.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
        elementoHumidadelisboa.innerText = `${data.main.humidity}%`;
        elementoVentolisboa.innerText =  `${data.wind.speed}km/h`;
        

    })

    //madrid

    const elementoCidademadrid = document.querySelector("#cidademadrid");
    const elementoTemperaturamadrid = document.querySelector("#temperaturamadrid span");
    const elementoDescmadrid = document.querySelector("#descricaomadrid");
    const elementoIconTempomadrid = document.querySelector("#icon-tempomadrid");
    const elementoHumidademadrid = document.querySelector("#humidademadrid span");
    const elementoVentomadrid = document.querySelector("#ventomadrid span");
    const elementoIconPaismadrid = document.querySelector("#paismadrid");
    
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=${apiKey}&lang=pt`)
        .then (res =>{
    
            return res.json();
    
        })
    
        .then(data =>{
            
            
            elementoCidademadrid.innerText = data.name;
            elementoTemperaturamadrid.innerText = parseInt  (data.main.temp);
            elementoDescmadrid.innerText = data.weather[0].description;
            elementoIconTempomadrid.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            elementoIconPaismadrid.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
            elementoHumidademadrid.innerText = `${data.main.humidity}%`;
            elementoVentomadrid.innerText =  `${data.wind.speed}km/h`;
            
    
        })
    
// Paris

        const elementoCidadeparis = document.querySelector("#cidadeparis");
        const elementoTemperaturaparis = document.querySelector("#temperaturaparis span");
        const elementoDescparis = document.querySelector("#descricaoparis");
        const elementoIconTempoparis = document.querySelector("#icon-tempoparis");
        const elementoHumidadeparis = document.querySelector("#humidadeparis span");
        const elementoVentoparis = document.querySelector("#ventoparis span");
        const elementoIconPaisparis = document.querySelector("#paisparis");
        
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${apiKey}&lang=pt`)
            .then (res =>{
        
                return res.json();
        
            })
        
            .then(data =>{
                
                
                elementoCidadeparis.innerText = data.name;
                elementoTemperaturaparis.innerText = parseInt  (data.main.temp);
                elementoDescparis.innerText = data.weather[0].description;
                elementoIconTempoparis.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                elementoIconPaisparis.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
                elementoHumidadeparis.innerText = `${data.main.humidity}%`;
                elementoVentoparis.innerText =  `${data.wind.speed}km/h`;
                
        
            })
        

//ROMA

            const elementoCidaderoma = document.querySelector("#cidaderoma");
            const elementoTemperaturaroma = document.querySelector("#temperaturaroma span");
            const elementoDescroma = document.querySelector("#descricaoroma");
            const elementoIconTemporoma = document.querySelector("#icon-temporoma");
            const elementoHumidaderoma = document.querySelector("#humidaderoma span");
            const elementoVentoroma = document.querySelector("#ventoroma span");
            const elementoIconPaisroma = document.querySelector("#paisroma");
            
            fetch (`https://api.openweathermap.org/data/2.5/weather?id=3169070&units=metric&appid=${apiKey}&lang=pt`)
                .then (res =>{
            
                    return res.json();
            
                })
            
                .then(data =>{
                    
                    
                    elementoCidaderoma.innerText = data.name;
                    elementoTemperaturaroma.innerText = parseInt  (data.main.temp);
                    elementoDescroma.innerText = data.weather[0].description;
                    elementoIconTemporoma.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                    elementoIconPaisroma.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
                    elementoHumidaderoma.innerText = `${data.main.humidity}%`;
                    elementoVentoroma.innerText =  `${data.wind.speed}km/h`;
                    
            
                })
            

 
                

 //TOKYO
 
 

            const elementoCidadetokyo = document.querySelector("#cidadetokyo");
            const elementoTemperaturatokyo = document.querySelector("#temperaturatokyo span");
            const elementoDesctokyo = document.querySelector("#descricaotokyo");
            const elementoIconTempotokyo = document.querySelector("#icon-tempotokyo");
            const elementoHumidadetokyo = document.querySelector("#humidadetokyo span");
            const elementoVentotokyo = document.querySelector("#ventotokyo span");
            const elementoIconPaistokyo = document.querySelector("#paistokyo");
            
            fetch (`https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=${apiKey}&lang=pt`)
                .then (res =>{
            
                    return res.json();
            
                })
            
                .then(data =>{
                    
                    
                    elementoCidadetokyo.innerText = data.name;
                    elementoTemperaturatokyo.innerText = parseInt  (data.main.temp);
                    elementoDesctokyo.innerText = data.weather[0].description;
                    elementoIconTempotokyo.setAttribute ("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                    elementoIconPaistokyo.setAttribute ("src",  `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
                    elementoHumidadetokyo.innerText = `${data.main.humidity}%`;
                    elementoVentotokyo.innerText =  `${data.wind.speed}km/h`;
                    
            
                })


//RELOGIO


                function startTime() {
                    const today = new Date();
                    let h = today.getHours();
                    let m = today.getMinutes();
                    let s = today.getSeconds();
                    m = checkTime(m);
                    s = checkTime(s);
                    document.getElementById('relogio').innerHTML =  h + ":" + m + ":" + s;
                    setTimeout(startTime, 1000);       
                }

                function checkTime(i) {
                    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                    return i;
                }




