const KEY = "1abb7a6c4c7c40c8801100948220411"

let time = new Date;
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayFirst = days[ time.getDay()];
let daySecond = days[ time.getDay()+1];
let dayThird = days[ time.getDay()+2];
let dayFourth = days[ time.getDay()+3];
let dayFifth = days[ time.getDay()+4];
let daySixth = days[ time.getDay()+5];
let daySeventh = days[ time.getDay()+6];

document.getElementById('current-date').innerHTML=dayFirst;
document.getElementById('forecast-monday').innerHTML=dayFirst;
document.getElementById('forecast-tuesday').innerHTML=daySecond;
document.getElementById('forecast-wednesday').innerHTML=dayThird;
document.getElementById('forecast-thursday').innerHTML=dayFourth;
document.getElementById('forecast-friday').innerHTML=dayFifth;
document.getElementById('forecast-saturday').innerHTML=daySixth;
document.getElementById('forecast-sunday').innerHTML=daySeventh;


async function fetWeather(locationCity) {
    
    const API= `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${locationCity}&days=7`;
    const res = await fetch(API,{
       
        headers:{"Access-Control-Allow-Origin":"*"}
        
    });
    const data = await res.json();
    console.log(data);

    const currentTime=document.getElementById('current-time');
    let local=data.location.localtime
    currentTime.innerHTML = local.slice(10,);
    

    const location=document.getElementsByClassName('feature-location')[0];
    const currentTemp=document.getElementsByClassName('current-weather_temp--data')[0];
    const currentIcon=document.getElementsByClassName('feature-iconca')[0];
    const currentHumidity=document.getElementsByClassName('current-weather_humidity--data')[0]
    const currentPressure=document.getElementsByClassName('current-weather_pressure--data')[0]
    const currentWindspeed=document.getElementsByClassName('current-weather_windspeed--data')[0]

    const forecastFirstIcon=document.getElementsByClassName('icon-monday')[0];
    const forecastFirstDay=document.getElementsByClassName('forecast-monday--day')[0]
    const forecastFirstNight=document.getElementsByClassName('forecast-monday--night')[0]

    const forecastSecondIcon=document.getElementsByClassName('icon-tuesday')[0];
    const forecastSecondDay=document.getElementsByClassName('forecast-tuesday--day')[0]
    const forecastSecondNight=document.getElementsByClassName('forecast-tuesday--night')[0]

    const forecastWednesdayIcon=document.getElementsByClassName('icon-wednesday')[0];
    const forecastWednesdayDay=document.getElementsByClassName('forecast-wednesday--day')[0]
    const forecastWednesdayNight=document.getElementsByClassName('forecast-wednesday--night')[0]

    const forecastThursdayIcon=document.getElementsByClassName('icon-thursday')[0];
    const forecastThursdayDay=document.getElementsByClassName('forecast-thursday--day')[0]
    const forecastThursdayNight=document.getElementsByClassName('forecast-thursday--night')[0]
    
    const forecastFridayIcon=document.getElementsByClassName('icon-friday')[0];
    const forecastFridayDay=document.getElementsByClassName('forecast-friday--day')[0]
    const forecastFridayNight=document.getElementsByClassName('forecast-friday--night')[0]

    const forecastSaturdayIcon=document.getElementsByClassName('icon-saturday')[0];
    const forecastSaturdayDay=document.getElementsByClassName('forecast-saturday--day')[0]
    const forecastSaturdayNight=document.getElementsByClassName('forecast-saturday--night')[0]

    const forecastSundayIcon=document.getElementsByClassName('icon-sunday')[0];
    const forecastSundayDay=document.getElementsByClassName('forecast-sunday--day')[0]
    const forecastSundayNight=document.getElementsByClassName('forecast-sunday--night')[0]

    location.innerHTML = data.location.name+","+data.location.country;
    currentTemp.innerText = data.current.temp_c;
    currentHumidity.innerText=data.current.humidity;
    currentIcon.src = "https:" + data.current.condition.icon;
    currentPressure.innerText=data.current.pressure_mb;
    currentWindspeed.innerText=data.current.wind_kph;

    forecastFirstIcon.src="https:" + data.forecast.forecastday[0].day.condition.icon;
    forecastFirstDay.innerHTML=data.forecast.forecastday[0].day.maxtemp_c;
    forecastFirstNight.innerHTML=data.forecast.forecastday[0].day.mintemp_c;

    forecastSecondIcon.src="https:" + data.forecast.forecastday[1].day.condition.icon;
    forecastSecondDay.innerHTML=data.forecast.forecastday[1].day.maxtemp_c;
    forecastSecondNight.innerHTML=data.forecast.forecastday[1].day.mintemp_c;

    forecastWednesdayIcon.src="https:" + data.forecast.forecastday[2].day.condition.icon;
    forecastWednesdayDay.innerHTML=data.forecast.forecastday[2].day.maxtemp_c;
    forecastWednesdayNight.innerHTML=data.forecast.forecastday[2].day.mintemp_c;

    forecastThursdayIcon.src="https:" + data.forecast.forecastday[3].day.condition.icon;
    forecastThursdayDay.innerHTML=data.forecast.forecastday[3].day.maxtemp_c;
    forecastThursdayNight.innerHTML=data.forecast.forecastday[3].day.mintemp_c;

    forecastFridayIcon.src="https:" + data.forecast.forecastday[4].day.condition.icon;
    forecastFridayDay.innerHTML=data.forecast.forecastday[4].day.maxtemp_c;
    forecastFridayNight.innerHTML=data.forecast.forecastday[4].day.mintemp_c;

    forecastSaturdayIcon.src="https:" + data.forecast.forecastday[5].day.condition.icon;
    forecastSaturdayDay.innerHTML=data.forecast.forecastday[5].day.maxtemp_c;
    forecastSaturdayNight.innerHTML=data.forecast.forecastday[5].day.mintemp_c;

    forecastSundayIcon.src="https:" + data.forecast.forecastday[6].day.condition.icon;
    forecastSundayDay.innerHTML=data.forecast.forecastday[6].day.maxtemp_c;
    forecastSundayNight.innerHTML=data.forecast.forecastday[6].day.mintemp_c;

    let forecastEventFirst= document.getElementById("forecast-monday")

    forecastEventFirst.addEventListener("click",()=>{
        currentTemp.innerText = data.current.temp_c;
        currentHumidity.innerText=data.current.humidity;
        currentIcon.src = "https:" + data.current.condition.icon;
        currentPressure.innerText=data.current.pressure_mb;
        currentWindspeed.innerText=data.current.wind_kph;
        document.getElementById('current-date').innerHTML=dayFirst;
    });


    let forecastEventSecond = document.getElementById("forecast-tuesday")

    forecastEventSecond.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[1].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[1].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[1].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=daySecond;
    });

    let forecastEventThird = document.getElementById("forecast-wednesday")

    forecastEventThird.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[2].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[2].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[2].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=dayThird;
    });

    let forecastEventFourth = document.getElementById("forecast-thursday")

    forecastEventFourth.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[3].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[3].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[3].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=dayFourth;
    });

    let forecastEventFifth= document.getElementById("forecast-friday")

    forecastEventFifth.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[4].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[4].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[4].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=dayFifth;
    });

    let forecastEventSixth = document.getElementById("forecast-saturday")

    forecastEventSixth.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[5].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[5].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[5].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=daySixth;
    });

    let forecastEventSeventh = document.getElementById("p")

    forecastEventSeventh.addEventListener("click",()=>{
        currentTemp.innerText = data.forecast.forecastday[6].day.avgtemp_c;
        currentHumidity.innerText=data.forecast.forecastday[6].day.avghumidity;
        currentWindspeed.innerText=data.forecast.forecastday[6].day.maxwind_kph;
        document.getElementById('current-date').innerHTML=daySeventh;
    });
}


const input = document.querySelector("input");

input.addEventListener('input',()=>{
    fetWeather(input.value);
})

let forecastEventCoursor = document.getElementsByClassName('forecast-item');
Array.from(forecastEventCoursor).forEach(function(forecastEventCoursor) {
    forecastEventCoursor.addEventListener('mouseover', () =>{
        forecastEventCoursor.style.borderColor = "rgb(160, 205, 71)";
        forecastEventCoursor.style.cursor = "pointer"
    });
    forecastEventCoursor.addEventListener('mouseout',()=>{
    forecastEventCoursor.style.borderColor = "rgb(159, 160, 156)";
    })
    

})
