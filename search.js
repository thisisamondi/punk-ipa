const searchBar = document.getElementById(`searchBar`);
let responseBody = [];


console.log(searchBar);

let p = document.querySelector(`p`);

let form = document.querySelector("form");

/* form.addEventListener(`submit`, (evt) => {
    const searchString = searchBar.value.toLowerCase();
    console.log(searchString);

    evt.preventDefault()
}) */




form.addEventListener(`submit`, (evt) => {
    const searchString = searchBar.value.toLowerCase();
    getData(searchString).then(res => {
        console.log(res)

        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        for (let item of res) {

            let listItem = document.createElement("li");
            let name = item.name;
            listItem.innerHTML = name;

            ul.appendChild(listItem);

            listItem.onclick = async () => {
                let p = document.querySelector(`p`);
                p.innerHTML = `
                Description: ${item.description} <br>
                Volume: ${item.volume.value} ${item.volume.unit}
                `
            }
        }
    });


    evt.preventDefault()
})

/* searchBar.addEventListener(`keyup`, (evt) => {

    const searchString = evt.target.value.toLowerCase();
    console.log(searchString); */

// if searchStr is B -> b
//if searchStr is b -> b
//convert name to lowercase and then compare

/* const filteredBeer = responseBody.filter((element) => {
    return (element.name.toLowerCase().includes(searchString)) ||
        element.description.toLowerCase().includes(searchString);

}); */



/* console.log(filteredBeer);

let ul = document.querySelector("ul");

for (let item of filteredBeer) {
    let listItem = document.createElement("li");
    let name = item.name;
    listItem.innerHTML = name;

    ul.appendChild(listItem);

    if (searchString === ``) {
        ul.innerHTML = ``;
    }
}


}); */


async function getData(str) {

    let response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${str}`);
    responseBody = await response.json();

    return responseBody;
}


/* async function render() {

    const result = await getData();

    for (let i = 0; i < result.length; i++) {
        const element = result[i];

        console.log(`${element.name}: ${element.tagline}: ${element.description}`);
        /* console.log(element.tagline);
    }


}*/

