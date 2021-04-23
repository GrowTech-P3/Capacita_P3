'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'estados', 'estado', 'label'
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'estados', 'label', 'estado'
    )
  }
};
