'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instituicaos', [{
     id_usuario: 5,
     nome: 'Ultra Cursos',
     telefone: '(81) 98888-8888',
     endereco: 'Rua dos Cursos',
     numero: 1,
     bairro: 'Santo Antônio',
     cidade: 'Recife',
     id_estado: 17,
     cep: '54.000-000',
     cnpj: '00.000.000/0001-01',
     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate. Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
     url_img: 'inst_1.png',
     ativo: 'true',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      id_usuario: 6,
      nome: 'Cursos Livres',
      telefone: '(81) 98888-9999',
      endereco: 'Rua dos Lugares',
      numero: 1,
      bairro: 'Vista Alegre',
      cidade: 'Jaboatão dos Guararapes',
      id_estado: 17,
      cep: '54.000-000',
      cnpj: '00.000.000/0001-01',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate. Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'inst_2.png',
      ativo: 'true',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    Example:
    await queryInterface.bulkDelete('Instituicaos', null, {});
  }
};
