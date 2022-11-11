// Superhero api

// Publick Key
// '17241921c9dfba29ba43b87d54b2ced9'

// // Private Key
// 'ba6c25e577053fbfb958e3ffbeab5388786e2dc9'

// // hash👉 hash is a combination of (ts + publickey + privatekey);
// '1ba6c25e577053fbfb958e3ffbeab5388786e2dc917241921c9dfba29ba43b87d54b2ced9'




// getting html elements

    const heroImageDiv = document.getElementById('heroImage');
    const heroBtn = document.getElementById('heroBtn');
    const marvelContainer = document.getElementById('marvelContainer');
    const containerRow = document.getElementById('container-row');
    const searchBtn = document.getElementById('search-hero');
    const tabsBtn = document.querySelectorAll('.tabs-btn');
    const comicSection = document.querySelector('.col-details');
    const articles = document.querySelectorAll('.content');
    const heroStats = document.getElementById('heroStats');
    const statsCol = document.querySelector('.stats-col')
    const btnCategory = document.querySelector('.btn-category');

    const searchInput = document.getElementById('searchInput');

// const resourceURI = 'https://marvel.com/characters'

    const urlApi = 'https://gateway.marvel.com/v1/public/characters?&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3'

    const BASE_URL = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3`

// const img = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_xlarge.jpg';

const getSuperHero = (id) => { // pick the character with the id
    const urlApi = 'https://gateway.marvel.com/v1/public/characters?&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3'

    fetch(urlApi)
    // name 👉 url/search/name : but in my case the syntax will be different
    // json.results[0].image.url : but in my case the syntax will be different
    
    // id 👉 url/id : but in my case the syntax will be different
    // json.image.url : but in my case the syntax will be different

    .then(response => response.json(id)) // this id will tell you where the character is:
    .then (json => {
        
        // console.log(showHeroInfo(json));
        const hero = json.data.results;

        const name = `<h1>${hero[id].name}</h1>`
        const comics = `<p>${hero[id].comics.available}</p>`;
        const description = `<p>${hero[id].description}</p>`
        // const stories = hero[id].stories.items;
        // const heroUrl =   `<p>${hero[id].urls[1].url}</p>`;                            
            heroStats.innerHTML = `                
                    <div class="img-col">
                        <div id="hero-image">                            
                            <img src= "${hero[id].thumbnail.path}.${hero[id].thumbnail.extension}"/>                            
                        </div>
                    </div> 
                    
                    <div class="stats-col">

                    <div class="hero-name">
                        ${name}
                    </div>
                    <div class="btn-category">
                            <button class="tabs-btn active" data-id="comics">Comics</button>
                            <button class="tabs-btn" data-id="description">Description</button>
                            <button class="tabs-btn">Story</button>
                        </div>

                        <article class="hero-info">
                            <div class="content active" id="comics">
                                <div class="available-comics">
                                    <p>Comics Available</p>
                                    ${comics}
                                </div>
                            </div>

                            <div class="content" id="description">
                                <div class="description">
                                    <h3>Description</h3>
                                    ${description}
                                </div>
                            </div>
                        </article>
                </div>
                    `
                    
                // console.log(btnTabs())    
   });

//    btnTabs()

   
}
    // window.addEventListener('DOMContenLoaded', function(){

    // });

    // const btnTabs = () => {
        // heroStats.addEventListener('click', function(e) {
        //     const btnId = e.target.dataset.id;
        //     console.log(statsCol);
        
        //     if(btnId){
        //         tabsBtn.forEach(function(btn){
        //             btn.classList.remove('active');
        //             e.target.classList.add('active');
                    
        //         });
        
        //         articles.forEach(function(article){
        //             article.classList.remove('active');
                    
        //         });
        
        //         const el = document.getElementById(btnId);
        //         el.classList.add('active');
        //     }
                                            
        //  });



       
    // }
    
    
    // const details = (id) => {

    //     const urlApi = 'https://gateway.marvel.com/v1/public/characters?&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3'

    // fetch(urlApi)
    // // name 👉 url/search/name : but in my case the syntax will be different
    // // json.results[0].image.url : but in my case the syntax will be different
    
    // // id 👉 url/id : but in my case the syntax will be different
    // // json.image.url : but in my case the syntax will be different

    // .then(response => response.json(id)) // this id will tell you where the character is:
    // .then (json => {
        
    //     // console.log(showHeroInfo(json));
    //     const hero = json.data.results;
    //     // const name = `<h1>${hero[id].name}</h1>`
    //     // const comics = `<p>${hero[id].comics.available}</p>`;
    //     // const description = `<p>${hero[id].description}</p>`
    //     // const stories = hero[id].stories.items;
    //     // const heroUrl = `<p>${hero[id].urls[1].url}</p>`;

         
    // });

    // }



// pattern how i show the data 
/* 
<p>Comics Available: ${hero[id].comics.available}</p>
<p>collectionURI: ${hero[id].comics.collectionURI}</p>
<p>URL: ${hero[id].urls[1].url}</p>
<p>Series: ${hero[id].series}</p>
<p>Stories: ${hero[id].stories}</p>


*/ 

// show stats of each hero dynamically

// search hero function
const getSearchSuperHero = (name, id) => { // passing name as parameter
    
    const BASE_URL = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3`
    fetch(BASE_URL)
    .then(response => response.json(id)) // this id will tell you where the character is:
    .then (json => { 
        const hero = json.data.results[0];

        const name = `<h1>${hero.name}</h1>`
        const comics = `<p>${hero.comics.available}</p>`;
        const description = `<p>${hero.description}</p>`
        // const stories = hero[id].stories.items;
        // const heroUrl =   `<p>${hero[id].urls[1].url}</p>`; 

            heroStats.innerHTML = `                
                    <div class="img-col">
                        <div id="hero-image">                            
                            <img src = "${hero.thumbnail.path}.${hero.thumbnail.extension}"/>                            
                        </div>
                        </div> 

                        <div class="stats-col">
                            <div class="hero-name">
                                ${name}
                            </div>
                        <div class="btn-category">
                            <button class="tabs-btn active" data-id="comics">Comics</button>
                            <button class="tabs-btn" data-id="description">Description</button>
                            <button class="tabs-btn">Story</button>
                        </div>

                        <article class="hero-info">
                            <div class="content active" id="comics">
                                <div class="available-comics">
                                    <p>Available</p>
                                    ${comics}
                                </div>
                            </div>

                            <div class="content" id="description">
                                <div class="description">
                                    <h3>Description</h3>
                                    ${description}
                                </div>
                            </div>
                        </article>
                           
                            
                     
                         `
            // console.log(searchInput.value);
            console.log(hero)

            // getSuperHero()
   });

}

const staticHero = (name) => {
    const BASE_URL = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&limit=100&apikey=17241921c9dfba29ba43b87d54b2ced9&hash=2449948cba8b0a4fc518d8b34d6275d3`
    fetch(BASE_URL)
    .then(response => response.json()) // this id will tell you where the character is:
    .then (json => {

        const hero = json.data.results[0];  
        containerRow.innerHTML += `
                                <div class="col">
                                    <div id="heroImage">                            
                                        <img src = "${hero.thumbnail.path}.${hero.thumbnail.extension}"/>                                                                                                               
                                    </div>
                                </div>
                                    
                                `
        console.log();
    });
}

// making the function that picks the hero randomly
const randomHero = () => {
    const numberOfHeros = 100;
    return Math.floor(Math.random() * numberOfHeros);
}

heroBtn.onclick = () => getSuperHero(randomHero())
searchBtn.onclick = () => getSearchSuperHero(searchInput.value);
getSuperHero(randomHero());
tabsBtn.onclick = () => console.log(btnTabs());

// ⭐⭐⭐⭐⭐⭐⭐⭐static heros for main page⭐⭐⭐⭐⭐⭐⭐⭐ 
const heroLoop = (myHeros) => {
    // let results = 0;
    for (const number of myHeros){
        results = number
    }

    // return results
}
const heros = [  
    staticHero('iron man'), 
    staticHero('spider-man (peter parker)'), 
    staticHero('hulk'), 
    staticHero('doctor doom'), 
    staticHero('captain america'), 
]

heroLoop(heros);
// ⭐⭐⭐⭐⭐⭐⭐⭐static heros for main page-ends⭐⭐⭐⭐⭐⭐⭐⭐