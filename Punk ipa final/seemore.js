const api = `https://api.punkapi.com/v2/beers`;

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const url = api + "/" + id;
const beerInfo = document.querySelector(".beerInfo");

async function getData(url) {
    let response = await fetch (url);
    let responseBody = await response.json(); 
    return responseBody; 
}

let sakerViArIntresseradeAv=['description', 'abv', 'volume', 'brewers_tips', 'ingredients', 'food_pairing']

async function render() {

    // properties
    const data = await getData(url);
    const beer = data[0];
    const name = beer.name;
    const ingredients = beer.ingredients;
    
    //image of beer
    const image = beer.image_url;
    document.querySelector(".beerImage").src = image;
    
    const ul = document.querySelector(".beerUl");
    const li = document.createElement("li");
    
    // Name of beer
    const h1Tag = document.createElement('h1');
    h1Tag.textContent = name;
    

    // Get properties inside object object
    for (var prop of sakerViArIntresseradeAv) { 
        
        let listItem = document.createElement("li");
        
        if(prop=='volume'){
          listItem.innerHTML = `Volume: <br>
          Value: ${beer.volume.value} ${beer.volume.unit}`
        }
        else if(prop == 'ingredients'){
                let rawHtml=`
                Ingredients: <br>
                Malt: ${getArrayAsString(beer.ingredients.malt.map(x=>x.name))}, `;
                rawHtml = `${rawHtml}<br>
                Hops: ${getArrayAsString(beer.ingredients.hops.map(x=>x.name))}, `
                rawHtml = `${rawHtml}<br>
                Yeast: ${beer.ingredients.yeast}`
                listItem.innerHTML = rawHtml;
        }
        else{
        let description = prop;
            // remove underscore
            if (prop.toUpperCase() == "BREWERS_TIPS" ) {
                description = "BREWERS TIPS";
            }
            else if (prop.toUpperCase() == "FOOD_PAIRING" ) {
                description = "FOOD PAIRING";
            }
        listItem.innerHTML = `${description.toUpperCase()}: ${beer[prop]}`;
    
        }
        ul.appendChild(listItem);
    }
    
    beerInfo.appendChild(h1Tag);
    beerInfo.appendChild(ul);
    

}


function getArrayAsString(arr){
		return arr.join(',')
}

render();