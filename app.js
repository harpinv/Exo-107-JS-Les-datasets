// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

//Récupération des dataset des élément p1 à p4.
let bloc1 = p1.dataset.age;
let bloc2 = p2.dataset.job;
let bloc3 = p3.dataset.hobbies.split('|');
let bloc4 = p4.dataset.boolean;

//On effectue quel-que opération avec les éléments récupéré.
bloc1 = (parseInt(bloc1) + 10).toString();
p2.dataset.job = p2.innerText.length.toString();

for(let hobby of bloc3) {
    p3.innerHTML += hobby.trim() + "<br>";
}

if(bloc4 === "true") {
    p4.innerText = "La valeur est vraie";
} else {
    p4.innerText = "La valeur est fausse";
}

//Ajout des dataset aux élément p5 à p8.
p5.dataset.age = "52";
p6.dataset.job = "informatisien";
p7.dataset.hobbies = "Footballe | Escalade | Chanter";
p8.dataset.boolean = "false";

//On effectue quel-que opération avec les éléments récupéré.
p5.dataset.age = (parseInt(p5.dataset.age) + 10).toString();
p6.dataset.job = p6.innerText.length.toString();

for(let hobby of p7.dataset.hobbies.split('|')) {
    p7.innerHTML += hobby.trim() + "<br>";
}

if(p8.dataset.boolean === "true") {
    p8.innerText = "La valeur est vraie";
} else {
    p8.innerText = "La valeur est fausse";
}