// === ENUMERACIONES ===

// 1. Enum para los Géneros de Películas
// Asigna un valor de cadena (String) legible a cada constante.
enum GeneroPelicula {
    ACCION = "Acción",
    COMEDIA = "Comedia",
    DRAMA = "Drama",
    TERROR = "Terror",
    DOCUMENTAL = "Documental"
}

// 2. Enum para los Países de Producción
enum PaisOrigen {
    ESPANHA = "España",
    USA = "Estados Unidos",
    CANADA = "Canadá",
    INDIA = "India",
    REINO_UNIDO = "Reino Unido"
}


// === INTERFAZ (TIPADO) ===

// Define la estructura estricta que deben seguir todos los objetos Pelicula.
interface Pelicula {
    titulo: string;
    genero: GeneroPelicula; // Asegura que solo se usen valores del enum GeneroPelicula
    pais: PaisOrigen;       // Asegura que solo se usen valores del enum PaisOrigen
    duracionMinutos: number;
}


// === OBJETOS Y DATOS ===

const peliculaA: Pelicula = {
    titulo: "El Laberinto del Fauno",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.ESPANHA,
    duracionMinutos: 118
};

const peliculaB: Pelicula = {
    titulo: "La La Land",
    genero: GeneroPelicula.COMEDIA,
    pais: PaisOrigen.USA,
    duracionMinutos: 128
};

const peliculaC: Pelicula = {
    titulo: "Trainspotting",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.REINO_UNIDO,
    duracionMinutos: 94
};

// Listado de películas
const listadoPeliculas: Pelicula[] = [peliculaA, peliculaB, peliculaC];


// === FUNCIÓN PARA MOSTRAR ===

function mostrarDetalles(peliculas: Pelicula[]): void {
    console.log("--- Listado de Películas y Clasificación ---");
    
    // Itera sobre el arreglo para imprimir los detalles
    peliculas.forEach((peli, index) => {
        console.log(`\nPELÍCULA #${index + 1}: ${peli.titulo}`);
        console.log(`  - Género: ${peli.genero}`);           // Muestra el valor de string del enum
        console.log(`  - País de Origen: ${peli.pais}`);       // Muestra el valor de string del enum
        console.log(`  - Duración: ${peli.duracionMinutos} min`);
    });
    
    console.log("\n-------------------------------------------");
}

// Ejecutar la función
mostrarDetalles(listadoPeliculas);

// Demostración: Muestra cómo puedes acceder a los valores del enum directamente
console.log(`\nValor del enum para el género Acción: ${GeneroPelicula.ACCION}`);
console.log(`Valor del enum para el país Canadá: ${PaisOrigen.CANADA}`);