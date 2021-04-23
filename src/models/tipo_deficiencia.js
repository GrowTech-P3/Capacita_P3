'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_deficiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tipo_deficiencia.hasMany(models.Curso, {
        foreignKey: 'id_deficiencia'
      })
      Tipo_deficiencia.belongsToMany(models.Usuario_pcd, {
        through: models.Usuario_tipo_deficiencia,
        foreignKey: 'id_tipo_deficiencia'
      })
    }
  };
  Tipo_deficiencia.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo_deficiencia',
  });
  return Tipo_deficiencia;
};