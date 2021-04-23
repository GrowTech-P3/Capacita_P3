'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum_topico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Forum_topico.hasOne(models.Usuario)
      // Forum_topico.hasMany(models.Forum_resposta)
    }
  };
  Forum_topico.init({
    titulo: DataTypes.STRING,
    texto: DataTypes.TEXT,
    id_usuario: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Forum_topico',
  });
  return Forum_topico;
};