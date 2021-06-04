'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscricao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inscricao.belongsTo(models.Usuario_pcd,{
        foreignKey:'id_usuario_pcd'
      });
      Inscricao.belongsTo(models.Curso,{
        foreignKey:'id_curso'
      })
    }
  };
  Inscricao.init({
  }, {
    sequelize,
    modelName: 'Inscricao',
  });
  return Inscricao;
};