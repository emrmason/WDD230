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

function toggleBanner() {
    if (document.getElementById('currentDate')[0].textContent == "Monday") {
        document.getElementByClassName("banner").style.display= "block";
    }
    if (document.getElementById('currentDate')[0].textContent == "Tuesday") {
        document.getElementByClassName("banner").style.display= "block";
    }
    else {
        document.getElementByClassName("banner").style.display= "none";

    }
}