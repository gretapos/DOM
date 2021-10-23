// 1.Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector("h1").style.color="darkgreen";
// b. Tagui i pridėti klasę small;
document.querySelector("i").classList.add("small");
// c. Iš tago h1 pašalinti klasę main;
document.querySelector("h1").classList.remove("main");
// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector("body>h2").classList.add("first");
document.querySelector("body>h2").classList.remove("main");
// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector("h2> span").style.fontSize="10px";
document.querySelector("h2> span").style.color="grey";
// 2.Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a. Suskaičiuoti kiek yra h2 tagų;
console.log("h2 tag skaicius: ", document.querySelectorAll("h2").length);
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log("h2 tag skaicius be first klases: ", document.querySelectorAll("h2").length - document.querySelectorAll("h2.first").length);
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
document.querySelectorAll("h2").forEach(element => element.style.color = "lightblue");
// d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document.querySelectorAll("div.prices > h2").forEach(element => element.classList.add("price-tag"));
// e. Pabraukti visus tagus su klase new;
document.querySelectorAll(".new").forEach(element => element.style.textDecoration = "underline");
// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log("Gyvunu kategorijos: ", document.querySelectorAll("ul").length);
    const zirafos = [];
    document.querySelectorAll("li").forEach(element => {
        if(element.textContent.search("Žirafa") >= 0 )
            zirafos.push(element.textContent);
    });
    console.log("Zirafu skaicius: ", zirafos.length);
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll("ul").forEach(element => {
    element.style.border = '1px solid pink';
    element.style.padding = '15px 50px';
})
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log("Nauji gyvunai: ", document.querySelectorAll(".new").length);
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
    document.querySelectorAll("ul").forEach(element => {
        const naujas =[];
        console.log(element.id.toUpperCase());

        element.querySelectorAll(".new").forEach(e => {
            naujas.push(e.textContent);
            console.log(e.textContent);
        })
        console.log("kiek yra naujų gyvūnų: ", naujas.length);
    })


// 3. Elementų events
// a. Padaryti tai ką liepia mygtukai Header1 sekcijoje; Nudažyti h1 žaliai, Pakeisti h1 fontą į 10px
const buttonh1Color = document.getElementById("h1-color");
const h1 = document.querySelector("h1");
buttonh1Color.addEventListener("click", event => {
    h1.style.color="green"
});

const buttonh1Font = document.getElementById("h1-font")

buttonh1Font.addEventListener("click", event => {
    h1.style.fontSize="10px"
});

// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const tagI = document.querySelector("i");
tagI.addEventListener("click", event => {
    tagI.style.fontWeight="bold"
});
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const pricesTag = document.getElementsByClassName("prices")[0];
pricesTag.addEventListener("click", event => {
    if (pricesTag.style.backgroundColor === "grey") {
        pricesTag.style.backgroundColor = "white"
    } else {
        pricesTag.style.backgroundColor = "grey"
    }
});
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
const tagContacts = document.getElementById("contacts");
tagContacts.addEventListener("click", event => {
    tagContacts.style.color = "orange"
});

// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const tagContactsu = document.querySelector("#contacts u");
tagContactsu.addEventListener("click", event => {
    tagContactsu.style.fontSize = "20px"
});

// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

document.querySelector("#contacts b").addEventListener("click", event => {
    tagContacts.style.color = null;
});
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
const buttonColorBack = document.getElementById("h1-color-back");
buttonColorBack.addEventListener("click", event => {
    h1.style.color = null;
});

const buttonFontBack = document.getElementById("h1-font-back");
buttonFontBack.addEventListener("click", event => {
    h1.style.fontSize = null;
});

// 4. Elementų grupių events
// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const newAnimals = document.querySelectorAll('ul li.new');

newAnimals.forEach(element => {
    element.addEventListener('dblclick', function (e) {
        element.style.color="red"
    })
});

// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
const Animals = document.querySelectorAll('ul li:not(.like-button)');

Animals.forEach(element => {
    element.addEventListener('click', function (e) {
        element.style.fontSize="130%"
    })
});

// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
const like = document.querySelectorAll('ul li.like-button');

like.forEach(element => {
    element.addEventListener('click', function (e) {
        element.parentElement.classList.add("like")
    })
});

// 5. Dinaminis elementų kūrimas (su createElement)
// a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

// b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

// c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

// d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta





