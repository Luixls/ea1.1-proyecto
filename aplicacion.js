const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const materiasRouter = require('./routes/materias');

app.use('/materias', materiasRouter);

puerto = 3001
app.listen(puerto, () => console.log('Servidor corriendo en puerto', puerto));
