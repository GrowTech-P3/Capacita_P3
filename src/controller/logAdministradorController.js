const logAdministrador =  require("../models/").Log_administrador;

const store = async (req,res) => {
    const {id_administrador,atividade} =req.body;
    const data_hora = new Date();
    const log =  await logAdministrador.create({id_administrador,atividade,data_hora});
    return res.json(log);
}


module.exports = {store}