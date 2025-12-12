// === ENUMERACIONES ===
// 1. Enum para los Géneros de Películas
// Asigna un valor de cadena (String) legible a cada constante.
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["ACCION"] = "Acci\u00F3n";
    GeneroPelicula["COMEDIA"] = "Comedia";
    GeneroPelicula["DRAMA"] = "Drama";
    GeneroPelicula["TERROR"] = "Terror";
    GeneroPelicula["DOCUMENTAL"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));
// 2. Enum para los Países de Producción
var PaisOrigen;
(function (PaisOrigen) {
    PaisOrigen["ESPANHA"] = "Espa\u00F1a";
    PaisOrigen["USA"] = "Estados Unidos";
    PaisOrigen["CANADA"] = "Canad\u00E1";
    PaisOrigen["INDIA"] = "India";
    PaisOrigen["REINO_UNIDO"] = "Reino Unido";
})(PaisOrigen || (PaisOrigen = {}));
// === OBJETOS Y DATOS ===
var peliculaA = {
    titulo: "El Laberinto del Fauno",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.ESPANHA,
    duracionMinutos: 118
};
var peliculaB = {
    titulo: "La La Land",
    genero: GeneroPelicula.COMEDIA,
    pais: PaisOrigen.USA,
    duracionMinutos: 128
};
var peliculaC = {
    titulo: "Trainspotting",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.REINO_UNIDO,
    duracionMinutos: 94
};
// Listado de películas
var listadoPeliculas = [peliculaA, peliculaB, peliculaC];
// === FUNCIÓN PARA MOSTRAR ===
function mostrarDetalles(peliculas) {
    console.log("--- Listado de Películas y Clasificación ---");
    // Itera sobre el arreglo para imprimir los detalles
    peliculas.forEach(function (peli, index) {
        console.log("\nPEL\u00CDCULA #".concat(index + 1, ": ").concat(peli.titulo));
        console.log("  - G\u00E9nero: ".concat(peli.genero)); // Muestra el valor de string del enum
        console.log("  - Pa\u00EDs de Origen: ".concat(peli.pais)); // Muestra el valor de string del enum
        console.log("  - Duraci\u00F3n: ".concat(peli.duracionMinutos, " min"));
    });
    console.log("\n-------------------------------------------");
}
// Ejecutar la función
mostrarDetalles(listadoPeliculas);
// Demostración: Muestra cómo puedes acceder a los valores del enum directamente
console.log("\nValor del enum para el g\u00E9nero Acci\u00F3n: ".concat(GeneroPelicula.ACCION));
console.log("Valor del enum para el pa\u00EDs Canad\u00E1: ".concat(PaisOrigen.CANADA));
