'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cursos', 'descricao', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cursos', 'descricao')
  }
};
