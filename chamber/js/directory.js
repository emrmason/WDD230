const requestURL = "https://raw.githubusercontent.com/emrmason/wdd230/main/chamber/data/directory.json";
const cards = document.querySelector(".dir-cards");
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
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    h2.innerHTML= `${member.name}`;
    p1.innerHTML= `Address: ${member.address}`;
    p2.innerHTML = `Phone: ${member.phone}`;
    p3.innerHTML = `Web: ${member.site}`;
    
    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} Logo`);
    logo.setAttribute("loading", "lazy");
    card.setAttribute("class", "dirMembers");

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(logo);

    cards.appendChild(card);
}
