// VARIABLES
const primer = document.getElementById("primerPalabra")
const segunda = document.getElementById("segundaPalabra")
const tercera = document.getElementById("tercerPalabra")
const cuarta = document.getElementById("cuartaPalabra")
const boton = document.getElementById("botonFrase")
const areaFrase = document.getElementById("frase");

// FUNCIONES
const fraseFull = (a, b, c, d) => {
    return (a + " " + b + " " + c + " " + d);
}

// EVENTOS
boton.addEventListener("click", () => {
    // Necesito obtener las palabras a unir
    const primera = (primerPalabra.value);
    const segunda = (segundaPalabra.value);
    const tercera = (tercerPalabra.value);
    const cuarta = (cuartaPalabra.value);


    // Necesito sumar esos 2 numeros
    const res = fraseFull(primera, segunda, tercera, cuarta)

    // Necesito expresarlos en pagina web
    areaFrase.innerHTML = res
})