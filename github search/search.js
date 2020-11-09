const searchBar = document.getElementById(`searchBar`);
let responseBody = [];


console.log(searchBar);

searchBar.addEventListener(`keyup`, (evt) => {

    const searchString = evt.target.value.toLowerCase();
    console.log(searchString);

    // if searchStr is B -> b
    //if searchStr is b -> b
    //convert name to lowercase and then compare



    const filteredBeer = responseBody.filter((element) => {
        return element.name.toLowerCase().includes(searchString);

    });

    console.log(filteredBeer);

});


async function getData() {

    let response = await fetch(`https://api.punkapi.com/v2/beers`);
    responseBody = await response.json();

    return responseBody;
}


async function render() {

    const result = await getData();

    for (let i = 0; i < result.length; i++) {
        const element = result[i];

        console.log(`${element.name}: ${element.tagline}`);
        /* console.log(element.tagline); */
    }


}

render();

