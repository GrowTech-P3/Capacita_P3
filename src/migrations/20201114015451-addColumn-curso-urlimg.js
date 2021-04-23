'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cursos', 'url_img', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cursos', 'url_img')
  }
};
