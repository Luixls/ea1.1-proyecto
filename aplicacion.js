const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
const seccionesRouter = require('./routes/secciones');
const materiasRouter = require('./routes/materias');
const profesoresRouter = require('./routes/profesores');
const eventosRouter = require('./routes/eventos');
const EventoController = require('./controllers/EventoController');

app.use('/materias', materiasRouter);
app.use('/profesores', profesoresRouter);
app.use('/secciones', seccionesRouter);
app.use('/eventos', eventosRouter);

app.get('/materia/eventos/:materiaId/:fechaInicio', EventoController.eventosPorSemana);

app.get('/eventos/proximos/:fechaInicio', EventoController.eventosProximosPorProfesor);

puerto = 3000
app.listen(puerto, () => console.log('Servidor corriendo en puerto', puerto));
