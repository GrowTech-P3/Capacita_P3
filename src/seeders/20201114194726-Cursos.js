'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cursos', [{
      id_instituicao: 1,
      nome_curso: 'Braile',
      id_deficiencia: '5',
      duracao: '1 Mês',
      carga_horaria: '20 h',
      horario: '9h às 10h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de Braile com foco de aprendizagem contínua.',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Administração',
      id_deficiencia: '1',
      duracao: '1 ano',
      carga_horaria: '300 h',
      horario: '9h às 12h',
      valor: 'R$ 300,00/Mês',
      ativo: true,
      resumo: 'Curso de Administração voltado para área empreserial com diploma reconhecido pelo mec',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Informática',
      id_deficiencia: '2',
      duracao: '3 meses',
      carga_horaria: '40 h',
      horario: '13h30 às 17h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de informática básica com módulos office word, excel, access e internet.',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Braile',
      id_deficiencia: '5',
      duracao: '1 Mês',
      carga_horaria: '20 h',
      horario: '9h às 10h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de Braile com foco de aprendizagem contínua.',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Administração',
      id_deficiencia: '1',
      duracao: '1 ano',
      carga_horaria: '300 h',
      horario: '9h às 12h',
      valor: 'R$ 300,00/Mês',
      ativo: true,
      resumo: 'Curso de Administração voltado para área empreserial com diploma reconhecido pelo mec',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Informática',
      id_deficiencia: '2',
      duracao: '3 meses',
      carga_horaria: '40 h',
      horario: '13h30 às 17h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de informática básica com módulos office word, excel, access e internet.',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ligula ut augue malesuada suscipit. Integer enim ligula, varius tristique tincidunt in, sagittis in sapien. Cras eu arcu pretium, pellentesque ante vitae, fringilla ligula. Morbi magna ex, luctus quis tincidunt sit amet, gravida at mauris. Pellentesque eget risus eu quam consectetur feugiat at et nisi. Nam tortor tellus, accumsan eget faucibus a, fringilla id nisi. Fusce feugiat magna nibh, et laoreet sapien vehicula vulputate.      Fusce rhoncus maximus ligula, et vulputate sapien ullamcorper sit amet. Phasellus egestas rutrum augue, in blandit diam gravida sed. Aliquam eget est quis nunc scelerisque pharetra. Etiam erat tellus, venenatis a elit ut, finibus dapibus lectus. Vestibulum eget rutrum turpis. Duis turpis enim, lobortis dictum tristique vitae, tempor a justo. Aliquam elementum odio ac justo maximus, nec consectetur nibh rutrum. Nam vitae purus at nisl tempus facilisis. ',
      url_img: 'curso_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
