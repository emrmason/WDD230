const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const today = {month: 'long', day: 'numeric', year: 'numeric'};

document.getElementById('lastMod').textContent = new Date().toLocaleDateString('en-UK', options);

document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classlist.toggle("responsive");
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// banner toggle function

    // const bannerday = new Date();
    // const day = bannerday.getDay();

    // const banner = document.querySelector(".banner");
    //     if (day == '1') {
    //         banner.setAttribute("display", "block");
    //     }
    //     else if (day == '2') {
    //         banner.setAttribute("display", "block");
    //     }
    //     else {
    //         banner.setAttribute("display", "none");
    //     }



// Weather API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5810988&units=imperial&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    document.querySelector('#temp').textContent = jsonObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`; 
    const desc = jsonObject.weather[0].description;
    // desc = desc.split(' ').map(capitalize).join(' ');
    const windspeed = jsonObject.wind.speed;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#weatherDesc').textContent= desc; 
    document.querySelector('#speed').textContent = windspeed;

    let t = jsonObject.main.temp;   
    let wc = '';

        if (t <= 50 && windspeed > 3) {
        wc = parseFloat(35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))).toFixed(2);
        document.getElementById('chill').innerHTML = `${wc} &#176;F`;}
        else {
        document.getElementById('chill').innerHTML= 'N/A';
        }
  });

// function capitalize(word) {
//     return `${word.charAt(0).toUpperCase}${word.slice(1)}`;
// }