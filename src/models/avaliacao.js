'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Avaliacao.belongsTo(models.Usuario_pcd)
      // Avaliacao.belongsTo(models.Curso)
    }
  };
  Avaliacao.init({
    id_usuario_pcd: DataTypes.INTEGER,
    id_curso: DataTypes.INTEGER,
    nota: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avaliacao',
  });
  return Avaliacao;
};