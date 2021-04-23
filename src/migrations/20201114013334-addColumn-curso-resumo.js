'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cursos', 'resumo', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cursos', 'resumo')
  }
};
