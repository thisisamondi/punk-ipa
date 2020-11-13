async function getData() {

    let response = await fetch (`https://api.punkapi.com/v2/beers/random`);
    let responseBody = await response.json(); 
   
    return responseBody;
}


async function render() {

    const container = document.querySelector(".container");
    const randomBtn = document.createElement("button");

    randomBtn.className = "random-btn";
    randomBtn.innerHTML = "RANDOMIZE";

    const beernameH2 = document.querySelector(".beertitle");
   
    const seemorelink = document.querySelector(".seemore");

    
    container.appendChild(randomBtn);

    randomBtn.onclick = async() => {

        let result = await getData();
        let name = result[0].name;
        let image = result[0].image_url;
        let id = result[0].id;

        if (image == null) {

            image = (`./no_beer.png`);
        }

        
        beernameH2.innerHTML = name.toUpperCase();
        document.querySelector(".randombeerimg").src = image;
        seemorelink.innerHTML = `See more >`; 
        
        seemorelink.onclick = () => {
            window.location.href=`seemore.html?id=${id}`;
            

        }
 
    }
    
}
render();
