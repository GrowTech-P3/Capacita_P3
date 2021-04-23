'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Usuarios', [
      {
        email: 'admin_geral@capacita.com.br',
        senha: '12345678910',
        tipo: '2',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'joao@hotmail.com',
        senha: '123',
        tipo: '0',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'maria@hotmail.com',
        senha: '123',
        tipo: '0',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ernandes@hotmail.com',
        senha: '123',
        tipo: '0',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ultra@cursos.com',
        senha: '123',
        tipo: '1',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'curso@livres.com',
        senha: '123',
        tipo: '1',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
