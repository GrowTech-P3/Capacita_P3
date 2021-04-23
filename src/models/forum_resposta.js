'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum_resposta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Forum_resposta.belongsTo(models.Forum_topico)
      // Forum_resposta.hasOne(models.Usuario)
    }
  };
  Forum_resposta.init({
    resposta: DataTypes.TEXT,
    id_topico: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Forum_resposta',
  });
  return Forum_resposta;
};