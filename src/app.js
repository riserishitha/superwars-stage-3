const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((Element, index) =>{
        return{
            name: Element,
            strength: getRandomStrength(),
            img:`images/super-${index+1}.png`,
            type: index % 2 == 0 ? 'hero' : 'villain',
        };
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = players.filter((element, index) => {
      return element.type == type;
    });
    fragment = fragment.map((element, index) => {
        return `<div class="player">
        <img src="${element.img}">
         <div class="name">${element.name}</div>
         <div class="strength">${element.strength}</div>
     </div>`
    });
 
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}