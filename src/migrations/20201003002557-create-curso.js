'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_instituicao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instituicaos',
          key: 'id'
        }
      },
      nome_curso: {
        type: Sequelize.STRING
      },
      id_deficiencia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tipo_deficiencia',
          key: 'id'
        }
      },
      duracao: {
        type: Sequelize.STRING
      },
      carga_horaria: {
        type: Sequelize.STRING
      },
      horario: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cursos');
  }
};