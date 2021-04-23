'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncia_resposta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Denuncia_resposta.init({
    id_denuncia: { primaryKey: true, type: DataTypes.INTEGER },
    id_resposta: { primaryKey: true, type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Denuncia_resposta',
  });
  return Denuncia_resposta;
};