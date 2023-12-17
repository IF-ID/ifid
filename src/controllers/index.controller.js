const cursosService = require('../services/cursos.service');

const index = async (req, res) => {
    const cursos = await cursosService.getAllCursos();
    res.render('index', { title: 'IFID', cursos });
}

const politicaDePrivacidade = (req, res) => {
    res.render('politicaDePrivacidade', { title: 'Política de Privacidade' });
}

module.exports = { index, politicaDePrivacidade };