'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Denuncias', [
      {
        id_usuario_pcd: '3',
        descricao: 'Falta máquina de escrever em braile',
        data: new Date(),
        aberto: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_usuario_pcd: '1',
        descricao: 'O curso tem poucos computadores, ficam 4 deficientes por computador.',
        data: new Date(),
        aberto: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Denuncias', null, {});
  }
};
