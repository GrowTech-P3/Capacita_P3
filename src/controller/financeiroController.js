const Inscricao = require("../models").Inscricao;
const UsuarioPcd = require("../models").Usuario_pcd;
const Curso = require("../models").Curso;
const Instituicao = require("../models").Instituicao;

const getPayValue = async (req,res) =>{
    const resultMap = [];
    const findInscri = await Inscricao.findAll({
        include:[
            {model:UsuarioPcd},
            {model:Curso,include:Instituicao}
        ]
    });
    findInscri.map(index =>{
        const value = index.Curso.valor.split(/\D/);
        const result ={
            curso : index.Curso.nome_curso,
			usuarioPcd : index.Usuario_pcd.nome,
			instituição : index.Curso.Instituicao.nome,
			data_hora : index.createdAt,
			valor: value[3]
        }
        resultMap.push(result);
    });

    return res.send(resultMap);
}

module.exports = {getPayValue};