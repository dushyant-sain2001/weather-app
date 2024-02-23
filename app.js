const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const weatherBody = document.querySelector(".weather-body");
const notFound = document.querySelector('.not-found');
const body= document.querySelector('.body');
const unHover=document.querySelector(".container");


const fetchData = async (city)=>{
    const api_key = "2edad4effdf030ad88ca7f3e9f055f24";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const res = await fetch(url);
    const data = await res.json();
    weatherBody.style.display = "flex";
    
    console.log(data);
     
     if(data.cod === '404')
     {
        body.style.backgroundColor="rgb(239, 86, 86)";
        notFound.style.display = "flex";
        weatherBody.style.display = "none"
        console.log("404 not found");
        return;
     }
    temperature.innerHTML = `${Math.round(data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${data.weather[0].description}`
    wind_speed.innerHTML = `${Math.round(data.wind.speed)}km/h`;
    humidity.innerHTML = `${data.main.humidity}%`;

    switch(data.weather[0].main){
        case 'Clear' : 
        weather_img.src="/assets/clear.png";
        break;
        case 'Cloud' : 
        weather_img.src="/assets/cloud.png";
        break;
        case 'Mist' : 
        weather_img.src="/assets/mist.png";
        break;
        case 'Rain' : 
        weather_img.src="/assets/rain.png";
        break;
        case 'Snow' : 
        weather_img.src="/assets/snow.png";
        break;

    /* default :  
     weather_img.src="./assets/cloud.png";
     break;*/
    }
    inputBox.value="";
}



searchBtn.addEventListener('click',()=>{
    fetchData(inputBox.value);
})