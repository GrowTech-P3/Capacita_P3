'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Curso_tipo_deficiencia', {
      id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'cursos',
          key: 'id'
        }
      },
      id_tipo_deficiencia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'tipo_deficiencia',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Curso_tipo_deficiencia');
  }
};