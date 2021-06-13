'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Noticia', [
      {
        titulo_noticia: 'Dia do Deficiente',
        descricao: '02 de Dezembro, dia do Deficiente',
        txt_noticia: 'O dia internacional das pessoas com deficiência é uma data comemorativa internacional promovida pelas Nações Unidas desde 1992, com o objetivo de promover uma maior compreensão dos assuntos concernentes à deficiência e para mobilizar a defesa da dignidade, dos direitos e o bem estar das pessoas.',
        data_publicacao: new Date(),
        ativo: true,
        id_usuario: '7',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Noticia', null, {});
  }
};
