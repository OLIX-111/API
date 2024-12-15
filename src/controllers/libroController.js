const biblioteca = require('../data/datos');

const obtenerLibros = (req, res) => {
    res.json(biblioteca.obtenerLibros());
};

const obtenerLibrosDisponibles = (req, res) => {
    res.json(biblioteca.obtenerLibrosDisponibles());
};

const obtenerLibrosNoDisponibles = (req, res) => {
    res.json(biblioteca.obtenerLibrosNoDisponibles());
};

module.exports = {
    obtenerLibros,
    obtenerLibrosDisponibles,
    obtenerLibrosNoDisponibles
};
