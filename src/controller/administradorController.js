const Administrador = require("../models/").Administrador;
const Usuario = require("../models/").Usuario;

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
        const {id_usuario,nome} =  req.body;
        const admin = await Administrador.create({id_usuario,nome});
        return res.json(admin);
    }catch(err){
        return res.json(err);
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
