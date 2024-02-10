class EventoController {
  static eventos = [];
  static ultimoId = 0;

  static agregar(req, res) {
      const { tipo, descripcion, fecha, materiaId } = req.body;
      const evento = {
          id: ++EventoController.ultimoId,
          tipo,
          descripcion,
          fecha,
          materiaId
      };
      EventoController.eventos.push(evento);
      res.json({ mensaje: 'Evento agregado con éxito', evento });
  }

  static listar(req, res) {
      res.json(EventoController.eventos);
  }
}

module.exports = EventoController;