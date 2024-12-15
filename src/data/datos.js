const Autor = require('../models/Autor');
const Libro = require('../models/Libro');
const Biblioteca = require('../services/Biblioteca');

const autoresIniciales = [
    new Autor(1, "Gabriel García Márquez", "Colombiana"),
    new Autor(2, "Jorge Luis Borges", "Argentina"),
    new Autor(3, "Juan Bosch", "Dominicana"),
    new Autor(4, "Pedro Mir", "Dominicana"),
    new Autor(5, "Marcio Veloz Maggiolo", "Dominicana"),
    new Autor(6, "Manuel del Cabral", "Dominicana")
];

const librosIniciales = [
    new Libro(1, "Cien años de soledad", 1, true),
    new Libro(2, "El Aleph", 2, false),
    new Libro(3, "El coronel no tiene quien le escriba", 1, true),
    new Libro(4, "La Mañosa", 3, true),
    new Libro(5, "Hay un país en el mundo", 4, true),
    new Libro(6, "El hombre del acordeón", 5, false),
    new Libro(7, "La vida no tiene nombre", 3, true),
    new Libro(8, "Compadre Mon", 6, true),
    new Libro(9, "Los ángeles de hueso", 5, true),
    new Libro(10, "Cuentos escritos en el exilio", 3, false),
    new Libro(11, "Si la mar fuera de tinta", 4, true),
    new Libro(12, "El buen ladrón", 5, true),
    new Libro(13, "Chinola Kid", 6, false)
];

const biblioteca = new Biblioteca(autoresIniciales, librosIniciales);

module.exports = biblioteca;
