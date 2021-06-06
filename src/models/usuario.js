'use strict';
const bcrypt = require("bcryptjs");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
   
    checkoutPassword(password){
      return bcrypt.compare(password, this.senha);
    }
    
    static associate(models) {
      Usuario.hasOne(models.Usuario_pcd, {
        foreignKey: 'id_usuario'
      })
      Usuario.hasOne(models.Instituicao, {
        foreignKey: 'id_usuario'
      })
      Usuario.hasOne(models.Administrador,{
        foreignKey:'id_usuario'
      })
      Usuario.hasMany(models.Noticia, {
        foreignKey: 'id_usuario'
      })
      // Usuario.belongsTo(models.Instituicao)
      // Usuario.belongsTo(models.Forum_topico)
      // Usuario.belongsTo(models.Forum_resposta)
    }
    
  };
  Usuario.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};