const Inscricao = require("../models").Inscricao;
const UsuarioPcd = require("../models").Usuario_pcd;
const Curso = require("../models").Curso;
const Instituicao = require("../models").Instituicao;

const getPayValue = async (req, res) => {
    const resultMap = [];
    const findInscri = await Inscricao.findAll({
        include: [
            { model: UsuarioPcd },
            { model: Curso, include: Instituicao }
        ]
    });
    findInscri.map(index => {
        const value = index.Curso.valor.split(/\D/);
        const result = {
            curso: {
                nome_curso: index.Curso.nome_curso,
            },
            usuarioPcd: {

                nome: index.Usuario_pcd.nome,
            },
            instituicao: {

                nome: index.Curso.Instituicao.nome,
            },
            dataHora: index.createdAt,
            valor: value[3]
        }
        resultMap.push(result);
    });

    return res.send(resultMap);
}

const getInstituicao = async (req, res) => {
    const { instituicao } = req.body;
    const inst = await Instituicao.findOne({
        where: { nome: instituicao.nome },
        include: Curso
    });
    if (!inst || inst == "") {
        return res.send({ message: "Instituição não encontrada!" });
    }
    const request = [];
    inst.Cursos.forEach(element => {
        request.push(Inscricao.findAll({
            where: { id_curso: element.id },
            include: [{
                model: Curso,
                include: Instituicao
            },
            { model: UsuarioPcd }]
        }))
    });
    const result = await Promise.all(request);
    const filtro = result.filter(index => {
        if (!index || index != "") {
            return index;
        }
    });
    const componentes = filtro[0];
    const response = [];
    componentes.forEach(index => {
        const value = index.Curso.valor.split(/\D/);
        const dados = {
            curso: {
                nome: index.Curso.nome_curso
            },
            usuarioPCD: {

                nome: index.Usuario_pcd.nome
            },
            instituição: {
                nome: instituicao.nome
            },
            dataHora: index.createdAt,
            valor: value[3]
        }
        response.push(dados);
    });
    return res.send(response);
}

const getCurso = async (req, res) => {
    const { curso } = req.body;
    const cursos = await Curso.findOne({
        where: { nome_curso: curso.nome_curso },
        include: [
            { model: Instituicao },
            {
                model: Inscricao,
                include: UsuarioPcd
            }
        ]
    });
    const response =[];
    for (let index = 0; index < cursos.Inscricaos.length; index++) {
        const value = cursos.valor.split(/\D/);
        const dados = {
            curso: {
                nome: cursos.nome_curso
            },
            usuarioPCD: {
                nome: cursos.Inscricaos[index].Usuario_pcd.nome
            },
            instituição: {
                nome: cursos.Instituicao.nome
            },
            dataHora: cursos.Inscricaos[index].createdAt,
            valor: value[3]
        }
        response.push(dados);
    }
    return res.send(response);
}

const getCursoInst = async (req, res) => {
    
}




module.exports = {
    getPayValue,
    getInstituicao,
    getCurso,
    getCursoInst
};