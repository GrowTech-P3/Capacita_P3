'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuario_tipo_deficiencia', [{
     id_usuario_pcd: 1,
     id_tipo_deficiencia: 2,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      id_usuario_pcd: 2,
      id_tipo_deficiencia: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id_usuario_pcd: 3,
      id_tipo_deficiencia: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuario_tipo_deficiencia', null, {});
  }
};
