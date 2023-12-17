const cursosService = require('../services/cursos.service');

const index = async (req, res) => {
    const cursos = await cursosService.getAllCursos();
    res.render('index', { title: 'IFID', cursos });
}

module.exports = { index };