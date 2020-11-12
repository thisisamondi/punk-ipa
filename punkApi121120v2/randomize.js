async function getData() {
    //fetch and wait for request to finish
    let response = await fetch (`https://api.punkapi.com/v2/beers/random`);
    //convert and wait for data to be converted to JSON
    let responseBody = await response.json(); //json är objekt.
    //Return the array of users
    return responseBody; // returnerar results från objektet.
}


async function render() {

    const container = document.querySelector(".container");
    const utmere = document.querySelector(".utmere");

    const randomBtn = document.createElement("button");
    randomBtn.className = "random-btn";
    randomBtn.innerHTML = "Randomize";

    const beernameH2 = document.createElement("h2");
    beernameH2.className = "beername";
   
    const seemorelink = document.createElement("p");
    seemorelink.className = "seemore"; 

    container.appendChild(beernameH2);
    container.appendChild(seemorelink);
    container.appendChild(randomBtn);
    container.appendChild(utmere);


   
    randomBtn.onclick = async() => {

        let result = await getData();
        let name = result[0].name;
        let image = result[0].image_url;
        let id = result[0].id;
        console.log(id);
        beernameH2.innerHTML = name.toUpperCase();
        document.querySelector(".randombeerimg").src = image;
        seemorelink.innerHTML = `See more >`; 
        
        seemorelink.onclick = () => {
            window.location.href=`see-more/seemore.html?id=${id}`;
            

        }
 
    }
    
}
render();




// $ (function() {

//     $(`.toggle`).on(`click`, function() {

//         if($(`.item`).hasClass(`active`)) {
//             $(`.item`).removeClass(`active`);
//         } else {
//             $(`.item`).addClass(`active`)
//         }
//     })
// })


// async function getData() {

//     let response = await fetch (`https://api.punkapi.com/v2/beers/random`);
//     let responseBody = await response.json();

//     return responseBody;
// }

// async function render() {

//     let randomBtn = document.querySelector(`.random_btn`);
//     let h3 = document.querySelector(`.beer_name`);
//     let p = document.querySelector(`.see_more`);

//     randomBtn.onclick = async() =>  {

//         let result = await getData();
//         let name = result[0].name;
//         let image = result[0].image_url;

//         if(image == null){

//             image = (`./no_beer.jpg`);
//         }

//         h3.innerHTML = name.toUpperCase();
//         document.querySelector(`.random_beer_img`).src = image;
//         p.innerHTML = `See more >`;

//     }
// }

// render(); 