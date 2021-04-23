'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Usuario_pcd, {
        foreignKey: 'id_usuario'
      })
      Usuario.hasOne(models.Instituicao, {
        foreignKey: 'id_usuario'
      })
      // Usuario.belongsTo(models.Instituicao)
      // Usuario.belongsTo(models.Forum_topico)
      // Usuario.belongsTo(models.Forum_resposta)
    }
  };
  Usuario.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};