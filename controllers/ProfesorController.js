class ProfesorController {
    static profesores = [];
    static ultimoId = 0;
  
    static agregar(req, res) {
        const { nombre, materias } = req.body;
        const profesor = {
            id: ++ProfesorController.ultimoId,
            nombre,
            materias: materias || [] 
        };
        ProfesorController.profesores.push(profesor);
        res.json({ mensaje: 'Profesor agregado con éxito', profesor });
    }
  
    static listar(req, res) {
        res.json(ProfesorController.profesores);
    }
  }
  
  module.exports = ProfesorController;
  