class Biblioteca {
  constructor(autoresIniciales = [], librosIniciales = []) {
    this.autores = autoresIniciales;
    this.libros = librosIniciales;
  }

  obtenerAutores() {
    return this.autores;
  }

  obtenerLibros() {
    return this.libros;
  }

  obtenerLibrosDisponibles() {
    return this.libros.filter((libro) => libro.disponible);
  }

  obtenerLibrosNoDisponibles() {
    return this.libros.filter((libro) => !libro.disponible);
  }
}

module.exports = Biblioteca;
