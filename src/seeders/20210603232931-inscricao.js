'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Inscricaos', [{
      id_usuario_pcd: 1,
      id_curso: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_usuario_pcd: 2,
      id_curso: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_usuario_pcd: 3,
      id_curso: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Inscricaos', null, {});

  }
};
