'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Noticia.belongsTo(models.Instituicao)
    }
  };
  Noticia.init({
    titulo_noticia: DataTypes.STRING,
    descricao: DataTypes.STRING,
    txt_noticia: DataTypes.STRING,
    data_publicacao: DataTypes.DATE,
    img_publicacao: DataTypes.STRING,
    id_instituicao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Noticia',
  });
  return Noticia;
};