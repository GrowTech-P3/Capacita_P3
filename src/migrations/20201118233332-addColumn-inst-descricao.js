'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('instituicaos', 'descricao', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('instituicaos', 'descricao')
  }
};
