'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Denuncia_cursos', [
      {
        id_denuncia: '1',
        id_curso: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_denuncia: '2',
        id_curso: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Denuncia_cursos', null, {});
  }
};
