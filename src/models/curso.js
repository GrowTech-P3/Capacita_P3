'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Curso.belongsTo(models.Instituicao, {foreignKey: 'id_instituicao', as: 'instituicaoId'})
      // Curso.belongsToMany(models.Usuario_pcd, { through: models.Inscricao })
      Curso.belongsTo(models.Tipo_deficiencia, {
        foreignKey: 'id_deficiencia'
      })
      Curso.belongsTo(models.Instituicao, {
        foreignKey: 'id_instituicao'
      })
      Curso.belongsToMany(models.Usuario_pcd, {
        through:models.Inscricao,
        foreignKey: 'id_curso'
      })
      Curso.belongsToMany(models.Denuncias, {
        through:models.Denuncia_curso,
        foreignKey: 'id_curso'
      })
      Curso.hasMany(models.Inscricao,{
        foreignKey:'id_curso'
      })
    }
  };
  Curso.init({
    id_instituicao: DataTypes.INTEGER,
    nome_curso: DataTypes.STRING,
    id_deficiencia: DataTypes.INTEGER,
    duracao: DataTypes.STRING,
    carga_horaria: DataTypes.STRING,
    horario: DataTypes.STRING,
    valor: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    resumo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    url_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};