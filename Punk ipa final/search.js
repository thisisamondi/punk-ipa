const searchBar = document.getElementById(`searchBar`);
let responseBody = [];
let p = document.querySelector(`p`);
let form = document.querySelector("form");
let page = 1;
/* console.log(searchBar); */
let buttonsVisible = false;

async function getData(str, page) {

    let response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${str}&per_page=10&page=${page}`);
    responseBody = await response.json();

    return responseBody;
}

async function render(searchString) {
    let res = await getData(searchString, page);
        
    if (res.length==0 && page > 1) {
            return false;
        }
        let ul = document.querySelector(".myList");
        ul.innerHTML = "";
        for (let item of res) {

            let listItem = document.createElement("li");
            let name = item.name;
            listItem.innerHTML = name;
            let id = item.id;

            ul.appendChild(listItem);

            listItem.onclick = () => {
                
                window.location.href=`./seemore.html?id=${id}`;
    
            }
        }
        buttonsVisible = true;
}

form.addEventListener(`submit`, (evt) => {
    page = 1;
    const searchString = searchBar.value.toLowerCase();
    
    render(searchString);
    
    if (!buttonsVisible) {
        const previousBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        previousBtn.innerHTML = "previous";
        nextBtn.innerHTML = "next";

        const searchwrapper = document.querySelector("#searchWrapper");
        searchwrapper.appendChild(previousBtn);
        searchwrapper.appendChild(nextBtn);
        
        // btn previous
        previousBtn.onclick = function (evt) {
        if (page !==1) {
            page--;
            render(searchString) 
            evt.preventDefault();
            }
        };
    console.log(nextBtn);
        //btn forward 
        nextBtn.onclick = async function (evt) {
            if (page >= 1) {
            page++;
            let result = await render(searchString);
            
                // if (!result) {
                //     page--;
                // }
            evt.preventDefault();
            }
        };
        
    }
 
    evt.preventDefault();
});