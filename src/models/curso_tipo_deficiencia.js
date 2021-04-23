'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_tipo_deficiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Curso_tipo_deficiencia.init({
    id_curso: DataTypes.INTEGER,
    id_tipo_deficiencia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso_tipo_deficiencia',
  });
  return Curso_tipo_deficiencia;
};