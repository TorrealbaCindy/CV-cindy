//MENU LATERAL

var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible==false){ // si esta oculto el menu
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION

let links = document.querySelectorAll("nav a");
for(var x =0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// CREO LAS BARRITAS DE UNA BARRA PARTICULAR IDENTIFICADA POR SU ID

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className ="e";
        id_barra.appendChild(div);
    }
}

// SELECCIONO TODAS LAS BARRAS GENERALES PARA LUEGO MANIPULARLAS

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let adobe = document.getElementById("adobe");
crearBarra(adobe);

let figma = document.getElementById("figma");
crearBarra(figma);

// GUARDAR LA CANTIDAD DE BARRITAS QUE SE VAN A IR PINTANDO POR CADA BARRA
// PARA ESO USO UN ARRAY, CADA POSICION PERTENECE A UN ELEMENTO
// comienzan en -1 porque no tiene ninguna pintada al iniciarse

let contadores = [-1,-1,-1,-1,-1]

//esta vaeriable se va a utilizar de bandera para saber si ya se ejecuto la animacion
let entro = false;

//funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight = habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        },100);
        const intervalAdobe = setInterval(function(){
            pintarBarra(adobe, 15, 3, intervalAdobe);
        },100);
        const intervalFigma = setInterval(function(){
            pintarBarra(figma, 16, 4, intervalFigma);
        },100);
    }
}

//lleno una barra partiular con la cantidad indicada

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#484848"

    }else{
        clearInterval(interval)
    }
}

//detecto el scrollingdel mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}