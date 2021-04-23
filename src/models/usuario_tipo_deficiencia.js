'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_tipo_deficiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario_tipo_deficiencia.init({
    id_usuario_pcd: { primaryKey: true, type: DataTypes.INTEGER },
    id_tipo_deficiencia: { primaryKey: true, type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Usuario_tipo_deficiencia',
  });
  return Usuario_tipo_deficiencia;
};