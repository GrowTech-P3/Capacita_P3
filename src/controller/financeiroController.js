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
    findInscri.forEach(index => {
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
    const { nome } = req.body;
    console.log(nome);
    const inst = await Instituicao.findOne({
        where: { nome: nome },
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
                nome_curso: index.Curso.nome_curso
            },
            usuarioPCD: {

                nome: index.Usuario_pcd.nome
            },
            instituicao: {
                nome: nome
            },
            dataHora: index.createdAt,
            valor: value[3]
        }
        response.push(dados);
    });
    return res.send(response);
}

const getCurso = async (req, res) => {
    const { nome_curso } = req.body;
    const cursos = await Curso.findOne({
        where: { nome_curso: nome_curso },
        include: [
            { model: Instituicao },
            {
                model: Inscricao,
                include: UsuarioPcd
            }
        ]
    });
    const response =[];
    cursos.Inscricaos.forEach(index=> {
        const value = cursos.valor.split(/\D/);
        const dados = {
            curso: {
                nome_curso: cursos.nome_curso
            },
            usuarioPCD: {
                nome: index.Usuario_pcd.nome
            },
            instituicao: {
                nome: cursos.Instituicao.nome
            },
            dataHora: index.createdAt,
            valor: value[3]
        }
        response.push(dados);
    });
    return res.send(response);
}

const getCursoInst = async (req, res) => {
    const {curso, instituicao} = req.body;

    const findInst = await Instituicao.findOne({
        where:{
            nome:instituicao.nome
        },
        include:{
            model:Curso,
            where:{
                nome_curso: curso.nome_curso
            },
            include:{
                model:Inscricao,
                include:UsuarioPcd
            }
        }
    });
    const response = [];
    findInst.Cursos.forEach(index=>{
        index.Inscricaos.forEach(element=>{
            const value = index.valor.split(/\D/);
            const dados = {
                curso: {
                    nome_curso: index.nome_curso
                },
                usuarioPCD: {
                    nome: element.Usuario_pcd.nome
                },
                instituicao: {
                    nome: findInst.nome
                },
                dataHora: element.createdAt,
                valor: value[3]
            }
            response.push(dados);
        });
    });
    return res.send(response);
}




module.exports = {
    getPayValue,
    getInstituicao,
    getCurso,
    getCursoInst
};