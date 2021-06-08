'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Administrador', [
      {
        id_usuario: '7',
        nome: 'Josemilson Júnior',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_usuario: '8',
        nome: 'Mestre Ryan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_usuario: '9',
        nome: 'Waschislin Lucena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_usuario: '10',
        nome: 'Thiago Lins',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Administrador', null, {});
  }
};
