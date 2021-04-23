'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Denuncia_noticias', {
      id_denuncia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Denuncias',
          key: 'id'
        }
      },
      id_noticia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Noticias',
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
    await queryInterface.dropTable('Denuncia_noticias');
  }
};