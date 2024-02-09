class MateriaController {
    static materias = [];
    static ultimoId = 0;
  
    static agregar(req, res) {
        const { nombre, codigo } = req.body;
        const materia = {
            id: ++MateriaController.ultimoId,
            nombre,
            codigo
        };
        MateriaController.materias.push(materia);
        res.json({ mensaje: 'Materia agregada con éxito', materia });
    }
  
    static listar(req, res) {
        res.json(MateriaController.materias);
    }
  }
  
  module.exports = MateriaController;
  