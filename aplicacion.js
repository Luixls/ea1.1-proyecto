const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const materiasRouter = require('./routes/materias');
const profesoresRouter = require('./routes/profesores');

app.use('/materias', materiasRouter);
app.use('/profesores', profesoresRouter);

puerto = 3001
app.listen(puerto, () => console.log('Servidor corriendo en puerto', puerto));