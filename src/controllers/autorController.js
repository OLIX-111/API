const biblioteca = require('../data/datos');

const obtenerAutores = (req, res) => {
    res.json(biblioteca.obtenerAutores());
};

module.exports = {
    obtenerAutores
};
