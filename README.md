# API Biblioteca

Esta API proporciona endpoints para gestionar autores y libros en una biblioteca.

## Endpoints

### Autores

| Método | Endpoint | Descripción                                                      |
| ------ | -------- | ---------------------------------------------------------------- |
| GET    | /autores | Retorna una lista de todos los autores registrados en el sistema |

### Libros

| Método | Endpoint              | Descripción                                                                             |
| ------ | --------------------- | --------------------------------------------------------------------------------------- |
| GET    | /libros               | Retorna una lista completa de todos los libros en la biblioteca                         |
| GET    | /libros/disponibles   | Retorna una lista de los libros que están actualmente disponibles para préstamo         |
| GET    | /libros/nodisponibles | Retorna una lista de los libros que no están disponibles (prestados o en mantenimiento) |
