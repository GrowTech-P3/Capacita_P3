'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Usuario_pcds', [{
      id_usuario: 2,
      nome: 'João Paulo Ferreira dos Santos Neto',
      telefone: '(81) 00000-0000',
      endereco: 'Rua Duque de Caxias',
      numero: 1,
      bairro: 'Vista Alegre',
      cidade: 'Jaboatão dos Guararapes',
      id_estado: 17,
      cpf: '120.345.678-90',
      cep: '54.000-000',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_usuario: 3,
      nome: 'Maria Joana Ester de Lima Vieira',
      telefone: '(81) 91111-1111',
      endereco: 'Rua Antônio de Gois',
      numero: 2,
      bairro: 'Santo Antônio',
      cidade: 'Recife',
      id_estado: 17,
      cpf: '009.876.543-21',
      cep: '54.100-000',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id_usuario: 4,
      nome: 'Ernandes Fernandes Vieira dos Santos',
      telefone: '(81) 92222-2222',
      endereco: 'Rua Ariano Suassuna',
      numero: 3,
      bairro: 'Alto da Paz',
      cidade: 'João Pessoa',
      id_estado: 15,
      cep: '54.200-000',
      cpf: '222.222.222-22',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuario_pcds', null, {});
  }
};
