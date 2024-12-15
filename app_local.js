const express = require('express');
const autorRoutes = require('./src/routes/autorRoute');
const libroRoutes = require('./src/routes/libroRoute');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/autores', autorRoutes);
app.use('/libros', libroRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
