const api = 'https://api.punkapi.com/v2/beers';
const formElement = document.querySelector('form');
const mainElement = document.querySelector('main');

formElement.addEventListener('submit', onSubmit);

function onSubmit(evt) {

    const searchStr = evt.target[0].value;

    const url = `${api}?beer_name=${searchStr}`;

    getData(url, render);    
    evt.preventDefault();
}

function getData(url, callback) {
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        callback(data);
    })
    .catch(error => console.log(error));
}

function render(data) {
    
    const ulElement = document.createElement('ul');

    ulElement.addEventListener('click', onUlClicked);

    for (let i = 0; i < data.length; i++) {
        
        const beer = data[i];
        
        const liElement = document.createElement('li');
        liElement.setAttribute('name', beer.id);
        liElement.textContent = beer.name;

        ulElement.appendChild(liElement);
    }

    mainElement.appendChild(ulElement);
}

function renderFirstBeer(data) {

    const firstBeer = data[0];

    const pElement = document.createElement('p');

    pElement.textContent = firstBeer.name;
    
    mainElement.appendChild(pElement);
}

function onUlClicked(evt) {
    
    const id = evt.target.getAttribute('name');
    const url = `myView.html?name=${id}`;
    document.location.href = url;
}