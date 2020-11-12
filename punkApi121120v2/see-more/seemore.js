const api = `https://api.punkapi.com/v2/beers`;
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const url = api + "/" + id;
const mainElement = document.querySelector(".vadsomhelst");
console.log(mainElement);

console.log(id);

async function getData(url) {
    let response = await fetch (url);
    let responseBody = await response.json(); 
    return responseBody; 
}


async function render() {

    const data = await getData(url);
    const beer = data[0];
    const name = beer.name;
    const brewers_tips = beer.brewers_tips;

    const h1Tag = document.createElement('h1');
    const pTag = document.createElement('p');

    h1Tag.textContent = name;
    pTag.textContent = brewers_tips;
    console.log(mainElement);
    
    mainElement.appendChild(h1Tag);
    mainElement.appendChild(pTag);
}

render();



//skapa variabel som tar in id
//använd id istället för random för att hämta specifikt
// render informationen
//innerHTML för att att få ut:
// - Description
// - Image
// - Alcohol by volume
// - Volume
// - Ingredients
// - Hops
// - Food pairing
// - Brewers tips

