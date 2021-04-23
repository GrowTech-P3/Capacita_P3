'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inscricaos', {
      id_usuario_pcd: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuario_pcds',
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
    await queryInterface.dropTable('Inscricaos');
  }
};