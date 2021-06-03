'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Denuncias.belongsToMany(models.Curso, {
        through: models.Denuncia_curso,
        foreignKey: 'id_denuncia'
      })
      Denuncias.belongsTo(models.Usuario_pcd, {
        foreignKey: 'id_usuario_pcd'
      }) 
    }
  };
  Denuncias.init({
    id_usuario_pcd: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    data: DataTypes.DATE,
    aberto: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Denuncias',
  });
  return Denuncias;
};