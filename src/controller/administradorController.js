const Administrador = require("../models/").Administrador;
const Usuario = require("../models/").Usuario;
const bcrypt = require("bcryptjs");

const index =  async(req,res) =>{
    const allAdmin = await Administrador.findAll({
        include:{
            model: Usuario,
            attributes:['id','email','ativo']
        }     
    });
    return res.json(allAdmin);
}

const store = async (req,res)=>{
    try{
        const {email,password,nome} =  req.body;
        const ativo = true;
        const tipo = 3;
        const userExists = await Usuario.findOne({where:{email}});
        if(userExists){
            return res.json({message:"Email já existe!"});
        }
        const senha = await bcrypt.hash(password,8);
        const user = await Usuario.create({email,senha,tipo,ativo}); 
        const admin = await Administrador.create({id_usuario:user.id,nome});
        const response = {
            message:'Administrador cadastrado com sucesso!',
            admin
        }
        return res.json(response);
    }catch(err){
        return res.json(err.message);
    }
}

const update = async (req,res) => {
    try{
        const {id_administrador,nome} = req.body;
        const admin = await Administrador.findByPk(id_administrador);
        if(!admin){
            return res.json({message:"Usuário não encontrado!"});
        }
        await admin.update({nome});
        return res.json({message:"Administrador Atualizado"});
    }catch(err){
        return res.json(err);
    }
}

const remove = async (req,res)=>{
    const {id_administrador} = req.body;
    const user = await Administrador.findOne({where:{id_administrador},include:Usuario});
    if(!user){
        return res.json({message:"Usuário não encontrado!"});
    }
    const modify = await Usuario.findOne({where:user.id_usuario});
    await modify.update({ativo:false});
    return res.json({message:"Usuário deletado"});
}

const indexById = async (req,res) =>{
    const {id_administrador} =  req.body;
    const admin = await Administrador.findOne({
        where:id_administrador,
        include:{
            model:Usuario,
            attributes:['id','email','ativo']
        }
    });
    return res.json(admin);
}

module.exports = {
    store,
    update,
    index,
    indexById,
    remove
}
