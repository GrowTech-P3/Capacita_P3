'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Estado.belongsTo(models.Usuario_pcd)
      Estado.hasMany(models.Instituicao, {
        foreignKey: 'id_estado'
      })
    }
  };
  Estado.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estado',
  });
  return Estado;
};