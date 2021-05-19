'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log_administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Log_administrador.belongsTo(models.Administrador,{
        foreignKey:'id_administrador'
      })
    }
  };
  Log_administrador.init({
    id_log: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    atividade:{
      type: DataTypes.STRING
    },
    data_hora:{
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Log_administrador',
    freezeTableName:true
  });
  return Log_administrador;
};