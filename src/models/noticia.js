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
      Noticia.belongsTo(models.Usuario , {
        foreignKey: 'id_usuario'
      })
    }
  };
  Noticia.init({
    titulo_noticia: DataTypes.STRING,
    descricao: DataTypes.STRING,
    txt_noticia: DataTypes.STRING,
    data_publicacao: DataTypes.DATE,
    img_publicacao: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Noticia',
  });
  return Noticia;
};