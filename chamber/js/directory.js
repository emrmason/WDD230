const requestURL = "https://raw.githubusercontent.com/emrmason/wdd230/main/chamber/data/directory.json";
const cards = document.querySelector(".cards");
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const members = jsonObject['members'];
        members.forEach(displayMembers);
    });

function displayMembers(member){
    let card= document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let logo = document.createElement('img');

    h2.innerHTML= `${member.name}`
    p1.innerHTML= `Address: ${member.address}, Phone: ${member.phone}, Web: ${member.site}`;
    
    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} Logo`);
    logo.setAttribute("loading", "lazy");

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(img);

    cards.appendChild(card);
}