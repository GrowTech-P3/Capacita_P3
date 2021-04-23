'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Denuncia_respostas', {
      id_denuncia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Denuncias',
          key: 'id'
        }
      },
      id_resposta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Forum_respostas',
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
    await queryInterface.dropTable('Denuncia_respostas');
  }
};