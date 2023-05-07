import data from "./data.json" assert {type: "json"};


//Funcion 

function createNode(element) {
    return document.createElement(element);
}

//----------------------------------------------------------------

//variables 

let suma_total = 0;
let cantidad = 0;
let icon = document.getElementsByClassName("icon");
let title = document.getElementsByClassName("ability__icon");
let point = document.getElementsByClassName("point");
let total = document.getElementsByClassName("score__big");

//------------------------------------------------------------------

data.forEach((element, index) => {
    //agregamos el icono
    icon[index].setAttribute("src", element["icon"]);

    //agregar la etiqueta span
    let span = createNode("span");
    span.innerHTML = element["category"];
    title[index].append(span);

    //agregar score
    point[index].innerHTML = element["score"];

    suma_total += element["score"];
    cantidad += 1;
});

//-------------------------------------------------------------------

//Agregar valor promedio
let promedio = parseInt(suma_total/cantidad);
total[0].innerHTML = promedio;

