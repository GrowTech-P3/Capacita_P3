'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Denuncia_cursos', {
      id_denuncia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Denuncias',
          key: 'id'
        }
      },
      id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Cursos',
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
    await queryInterface.dropTable('Denuncia_cursos');
  }
};