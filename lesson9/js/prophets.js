// code from BYUI assignment
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards= document.querySelector(".cards");
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
        // Thanks Bro Blazzard for help from lab recording
    });

function displayProphets(prophet){
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let portrait = document.createElement("img");
    let h4 = document.createElement("h4");
    // Thanks Lewis Smith for your help!

    h2.textContent = prophet.name + " " + prophet.lastname;
    h3.textContent = 'Born: ' + prophet.birthdate;
    h4.textContent = 'Died: ' + prophet.death;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", "Portrait of " + prophet.name + " " + prophet.lastname);
    portrait.setAttribute("loading", "lazy");

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(h4);

    cards.appendChild(card);
}


