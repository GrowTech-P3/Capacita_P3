'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_pcd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Usuario_pcd.hasOne(models.Estado)
      // Usuario_pcd.belongsToMany(models.Curso, { through: models.Inscricao })
      // Usuario_pcd.belongsToMany(models.Tipo_deficiencia, { through: models.Usuario_tipo_deficiencia })
      // Usuario_pcd.hasMany(models.Avaliacao)
      Usuario_pcd.belongsToMany(models.Curso, {
        through: models.Inscricao,
        foreignKey: 'id_usuario_pcd'
      })
      Usuario_pcd.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario'
      })
      Usuario_pcd.belongsToMany(models.Tipo_deficiencia, {
        through: models.Usuario_tipo_deficiencia,
        foreignKey: 'id_usuario_pcd'
      })
    }
  };
  Usuario_pcd.init({
    id_usuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    id_estado: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario_pcd',
  });
  return Usuario_pcd;
};