'use strict';
const bcrypt = require("bcryptjs");
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
      },
      {
        email: 'josemilson@capacita.com',
        senha: await bcrypt.hash('123',8),
        tipo: '3',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jeferson@capacita.com',
        senha: await bcrypt.hash('123',8),
        tipo: '3',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'waschislin@capacita.com',
        senha: await bcrypt.hash('123',8),
        tipo: '3',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'thiago@capacita.com',
        senha: await bcrypt.hash('123',8),
        tipo: '3',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mastercursos@master.com.br',
        senha: await bcrypt.hash('123',8),
        tipo: '1',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'contato@contatocursos.com.br',
        senha: await bcrypt.hash('123',8),
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
