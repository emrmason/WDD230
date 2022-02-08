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
    if (options.weekday == "Monday") {
        document.getElementById(".banner").style.display= "block";
    }
    if (options.weekday == "Tuesday") {
        document.getElementById(".banner").style.display= "block";
    }
    else {
        document.getElementById(".banner").style.display= "none";

    }
}