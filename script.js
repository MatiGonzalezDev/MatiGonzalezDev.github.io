let menuVisible = false;
//Funcion que oculta o muetra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica a las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("c");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("css");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("mysql");
        habilidades[7].classList.add("arduino");
        habilidades[8].classList.add("office");
        habilidades[9].classList.add("integridad");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("trabajo");
        habilidades[12].classList.add("creatividad");
        habilidades[13].classList.add("dedicacion");
    }
}
// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
