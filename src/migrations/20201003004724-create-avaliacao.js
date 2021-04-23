'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Avaliacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario_pcd: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario_pcds',
          key: 'id'
        }
      },
      id_curso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',
          key: 'id'
        }
      },
      nota: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Avaliacaos');
  }
};