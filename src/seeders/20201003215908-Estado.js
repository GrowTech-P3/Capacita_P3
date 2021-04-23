'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Estados', [
       {
        label: 'AC - Acre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'AL - Alagoas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'AP - Amapá',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'AM - Amazonas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'BA - Bahia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'CE - Ceará',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'DF - Distrito Federal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'ES - Espirito Santo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'GO - Goais',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'MA - Maranhão',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'MT - Mato Grosso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'MS - Mato Grosso do Sul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'MG - Mina Gerais',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'PA - Pará',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'PB - Paraíba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'PR - Paraná',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'PE - Pernambuco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'PI - Piauí',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'RJ - Rio de Jandeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'RN - Rio Grande do Norte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'RS - Rio Grande do Sul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'RO - Rondônia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'RR - Roraima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'SC - Santa Caterina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'SP - São Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'SE - Sergipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'TO - Tocantins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Estados', null, {});
     
  }
};
