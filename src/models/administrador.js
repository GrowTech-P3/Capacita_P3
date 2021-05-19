'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    static associate(models) {
      Administrador.belongsTo(models.Usuario,{
        foreignKey:'id_usuario',
      })
      Administrador.hasMany(models.Log_administrador,{
        foreignKey:'id_administrador'
      })
    }
  };
  Administrador.init({
    id_administrador:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull:false
    },
    nome:{
      type : DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Administrador',
    freezeTableName:true
  });
  return Administrador;
};