$ (function() {

    $(`.toggle`).on(`click`, function() {

        if($(`.item`).hasClass(`active`)) {
            $(`.item`).removeClass(`active`);
        } else {
            $(`.item`).addClass(`active`)
        }
    })
})


async function getData() {

    let response = await fetch (`https://api.punkapi.com/v2/beers/random`);
    let responseBody = await response.json();

    return responseBody;
}

async function render() {

    let randomBtn = document.querySelector(`.random_btn`);
    let h3 = document.querySelector(`.beer_name`);
    let p = document.querySelector(`.see_more`);

    randomBtn.onclick = async() =>  {

        let result = await getData();
        let name = result[0].name;
        let image = result[0].image_url;

        if(image == null){

            image = (`./no_beer.jpg`);
        }

        h3.innerHTML = name.toUpperCase();
        document.querySelector(`.random_beer_img`).src = image;
        p.innerHTML = `See more >`;

    }
}

render(); 