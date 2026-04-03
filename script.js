
const miBoton = document.getElementById("btnSubir");
const miBarra = document.getElementById("miBarra");


window.onscroll = function() {
    mostrarOcultarBoton();
    actualizarBarra();
};


function mostrarOcultarBoton() {
    let scrollActual = document.body.scrollTop || document.documentElement.scrollTop;
    let alturaVentana = document.documentElement.clientHeight;
    let alturaTotal = document.documentElement.scrollHeight;

    if (scrollActual + alturaVentana >= alturaTotal - 5) {
        miBoton.style.display = "block";
    } else {
        miBoton.style.display = "none"; 
    }
}

miBoton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function actualizarBarra() {
    let scrollActual = document.body.scrollTop || document.documentElement.scrollTop;
    
    let alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let porcentaje = (scrollActual / alturaTotal) * 100;
        miBarra.style.width = porcentaje + "%";
}