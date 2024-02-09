const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");

const puerto = 3000
app.listen(puerto, () => console.log("Servidor abierto en puerto", puerto))