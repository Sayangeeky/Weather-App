const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dbb2b118d1msh9936d70483819c4p11b501jsnf8e36b088932',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
cityName.innerHTML = city;

fetch(url+ city, options)
  .then(response => response.json())
  .then(data => {



    console.log(data);

    cloud_pct.innerHTML = data.cloud_pct
    feels_like.innerHTML = data.feels_like 
    humidity.innerHTML = data.humidity
    humidity2.innerHTML = data.humidity
    max_temp.innerHTML = data.max_temp
    min_temp.innerHTML = data.min_temp
    sunrise.innerHTML = data.sunrise
    sunset.innerHTML = data.sunset
    temp.innerHTML = data.temp
    temp2.innerHTML = data.temp
    wind_degrees.innerHTML = data.wind_degrees
    
    wind_speed2.innerHTML = data.wind_speed

  
  })
  .catch(error => console.error(error));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(city.value)
})
getWeather("Kolkata");
