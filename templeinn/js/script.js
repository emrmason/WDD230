const today = {month: 'long', day: 'numeric', year: 'numeric'};
document.querySelector('#currentdate').textcontent= today;


const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
.then((response) => response.json())
    console.log = "it worked"
.then((jsonObject) => {
  document.querySelector('#temp').textContent = jsonObject.current.temp;
  const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`; 
  const desc = jsonObject.current.weather.description;
  document.querySelector('#weather-icon').setAttribute('src', iconsrc);
  document.querySelector('#weather-icon').setAttribute('alt', desc);
  document.querySelector('#weatherDesc').textContent= desc; 
})
