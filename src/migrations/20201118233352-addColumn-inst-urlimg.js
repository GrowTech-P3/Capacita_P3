'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('instituicaos', 'url_img', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('instituicaos', 'url_img')
  }
};
