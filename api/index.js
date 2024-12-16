const express = require("express");
const autorRoutes = require("../src/routes/autorRoute");
const libroRoutes = require("../src/routes/libroRoute");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://oliverfrontend.vercel.app","http://localhost:4173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/autores", autorRoutes);
app.use("/api/libros", libroRoutes);

export default app;
