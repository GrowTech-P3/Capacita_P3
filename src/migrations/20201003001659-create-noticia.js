'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Noticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo_noticia: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      txt_noticia: {
        type: Sequelize.STRING
      },
      data_publicacao: {
        type: Sequelize.DATE
      },
      img_publicacao: {
        type: Sequelize.STRING
      },
      id_instituicao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instituicaos',
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
    await queryInterface.dropTable('Noticias');
  }
};