'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuario_tipo_deficiencia', {
      id_usuario_pcd: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'usuario_pcds',
          key: 'id'
        }
      },
      id_tipo_deficiencia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'tipo_deficiencia',
          key: 'id',
          unique: true
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuario_tipo_deficiencia');
  }
};