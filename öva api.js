async function getData() {
    //fetch and wait for request to finish
    let response = await fetch (`https://api.punkapi.com/v2/beers/random`);
    //convert and wait for data to be converted to JSON
    let responseBody = await response.json(); //json är objekt.
    //Return the array of users
    return responseBody; // returnerar results från objektet.
}


async function render() {
    let result = await getData();
    let name = result[0].name;
    console.log(name);

}

render();