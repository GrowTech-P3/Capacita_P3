'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('log_administrador', {
      id_log: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'administrador',
          key: 'id_administrador'
        }
      },
      atividade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('log_administrador');
  }
};
