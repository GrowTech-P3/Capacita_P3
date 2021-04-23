'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Denuncia.init({
    id_usuario_pcd: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    data: DataTypes.DATE,
    aberto: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Denuncia',
  });
  return Denuncia;
};