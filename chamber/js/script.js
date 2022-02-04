const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('lastMod').textContent = new Date().toLocaleDateString('en-UK', options);

const today = {month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classlist.toggle("responsive");
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);