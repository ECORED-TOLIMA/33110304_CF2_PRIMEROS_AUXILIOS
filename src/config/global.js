export default {
  global: {
    Name: 'Valoración, atención básica y transferencia en primeros auxilios',
    Description:
      'Este componente desarrolla las habilidades técnicas necesarias para realizar la valoración clínica estructurada, aplicar soporte vital básico y brindar atención inicial en traumatismos y emergencias clínicas. Incluye movilización segura, manejo de lesiones y transferencia adecuada de la víctima al personal de salud, conforme a protocolos de primeros auxilios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Anatomía y fisiología aplicada',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Sistema cardiovascular', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Sistema respiratorio', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Sistema osteomuscular', hash: 't_1_3' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medidas de bioseguridad en primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Valoración clínica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Valoración primaria (ABCDE)',
            hash: 't_3_1',
          },
          { numero: '3.2', titulo: 'Valoración secundaria', hash: 't_3_2' },
          {
            numero: '3.3',
            titulo: 'Examen físico céfalo-caudal',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Signos vitales por grupos etarios',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Soporte vital básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Reanimación cardiopulmonar (adulto, niño y lactante)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso del Desfibrilador Externo Automático (DEA)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Obstrucción de vía aérea por cuerpo extraño (OVACE)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Atención de traumatismos físicos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Heridas y hemorragias', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Quemaduras', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Lesiones osteomusculares', hash: 't_5_3' },
          { numero: '5.4', titulo: 'Amputación traumática', hash: 't_5_4' },
          { numero: '5.5', titulo: 'Inmovilización y vendaje', hash: 't_5_5' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Movilización y traslado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Técnicas básicas de movilización',
            hash: 't_6_1',
          },
          { numero: '6.2', titulo: 'Uso de tabla espinal', hash: 't_6_2' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Emergencias clínicas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Lesiones por agentes externos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Agentes térmicos y eléctricos',
            hash: 't_8_1',
          },
          { numero: '8.2', titulo: 'Intoxicaciones', hash: 't_8_2' },
          { numero: '8.3', titulo: 'Picaduras y mordeduras', hash: 't_8_3' },
          { numero: '8.4', titulo: 'Cuerpos extraños', hash: 't_8_4' },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Parto de emergencia',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '9.1', titulo: 'Atención del nacimiento', hash: 't_9_1' },
          {
            numero: '9.2',
            titulo: 'Cuidados inmediatos del recién nacido',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Monitoreo, registro y vigilancia',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_33110233_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'ABCDE',
      significado:
        'método sistemático de valoración primaria que permite identificar amenazas inmediatas a la vida, evaluando vía aérea, respiración, circulación, estado neurológico y exposición.',
    },
    {
      termino: 'Amputación traumática',
      significado:
        'separación parcial o total de una extremidad como consecuencia de un trauma de alta energía.',
    },
    {
      termino: 'Arrastre de emergencia',
      significado:
        'técnica de movilización rápida utilizada cuando existe peligro inminente para el paciente o el auxiliador.',
    },
    {
      termino: 'AVDI',
      significado:
        'escala rápida para valorar el nivel de conciencia: Alerta, responde a Voz, responde al Dolor, Inconsciente.',
    },
    {
      termino: 'Céfalo–caudal',
      significado:
        'método de examen físico que evalúa el cuerpo desde la cabeza hasta los pies de manera ordenada.',
    },
    {
      termino: 'Cianosis',
      significado:
        'coloración azulada de piel y mucosas causada por disminución de oxígeno en la sangre.',
    },
    {
      termino: 'Compresión torácica',
      significado:
        'presión rítmica aplicada sobre el tórax durante la reanimación cardiopulmonar para mantener circulación sanguínea.',
    },
    {
      termino: 'Convulsión',
      significado:
        'actividad eléctrica anormal del cerebro que produce movimientos involuntarios y pérdida temporal del control corporal.',
    },
    {
      termino: 'DEA (Desfibrilador Externo Automático)',
      significado:
        'dispositivo que analiza el ritmo cardíaco y administra una descarga eléctrica en caso de paro cardíaco por ritmo desfibrilable.',
    },
    {
      termino: 'Esguince',
      significado: 'lesión de ligamentos causada por estiramiento o desgarro.',
    },
    {
      termino: 'Evento cerebrovascular (ECV)',
      significado:
        'alteración súbita del flujo sanguíneo cerebral que puede producir déficit neurológico.',
    },
    {
      termino: 'Frecuencia cardíaca',
      significado: 'número de latidos del corazón por minuto.',
    },
    {
      termino: 'Hipoglicemia',
      significado: 'disminución anormal de los niveles de glucosa en sangre.',
    },
    {
      termino: 'Hipotermia',
      significado: 'descenso peligroso de la temperatura corporal.',
    },
    {
      termino: 'Inmovilización',
      significado:
        'procedimiento destinado a limitar el movimiento de una parte del cuerpo lesionada.',
    },
    {
      termino: 'Luxación',
      significado:
        'desplazamiento de los huesos que conforman una articulación.',
    },
    {
      termino: 'OVACE',
      significado:
        'obstrucción de la vía aérea por cuerpo extraño que impide el paso del aire hacia los pulmones.',
    },
    {
      termino: '<em>Shock</em>',
      significado:
        'estado crítico en el que el flujo sanguíneo es insuficiente para satisfacer las necesidades del organismo.',
    },
    {
      termino: 'Tabla espinal',
      significado:
        'dispositivo rígido utilizado para inmovilizar y trasladar pacientes con sospecha de lesión vertebral.',
    },
    {
      termino: 'Transferencia asistencial',
      significado:
        'entrega organizada del paciente al personal de salud, incluyendo informe claro y estructurado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015, por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1801 de 2016, por la cual se expide el Código Nacional de Seguridad y Convivencia Ciudadana</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=80538',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2017). <em>Ley 1831 de 2017, por medio de la cual se regula el uso del desfibrilador externo automático (DEA) en transportes de asistencia, lugares de alta afluencia de público y se dictan otras disposiciones</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201831%20de%202017.pdf',
    },
    {
      referencia:
        'Cruz Roja Colombiana. (2021). <em>Manual de primeros auxilios</em>.',
      link: '',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Métodos manuales de transporte de pacientes</em>.',
      link: 'https://www.youtube.com/watch?v=gSFK0j8W7KA',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Técnicas de reanimación</em>.',
      link: 'https://www.youtube.com/watch?v=6fDvRfIwDbw',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2024). <em>Intoxicaciones agudas por sustancias químicas</em>.',
      link:
        'https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_Intoxicaciones%20agudas%20por%20sustancias%20qu%C3%ADmicas%202024.pdf',
    },
    {
      referencia:
        'Megías, M., et al. (s. f.). <em>Sistema cardiovascular</em>. Universidad de Vigo.',
      link:
        'https://mmegias.webs.uvigo.es/2-organos-a/guiada_o_a_05cardiovascular.php',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Resolución 926 de 2017, por la cual se reglamenta el desarrollo y operación del Sistema de Emergencias Médicas</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.926%20de%202017.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <em>Resolución 3280 de 2018, por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención en Salud Materno Perinatal y se establecen las directrices para su operación</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). <em>Resolución 3316 de 2019, por la cual se establecen disposiciones para el uso del Desfibrilador Externo Automático (DEA)</em>.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=88298',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2006). <em>Decreto 3518 de 2006, por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=21859',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016). <em>Decreto 780 de 2016, por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
    {
      referencia:
        'Sociedad Española de Cardiología. (2020). <em>2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care</em>. American Heart Association.',
      link:
        'https://secardiologia.es/cientifico/guias-clinicas/miscelanea/12007-2020-american-heart-association-guidelines-for-cardiopulmonary-resuscitation-and-emergency-cardiovascular-care',
    },
    {
      referencia:
        'Stanford Medicine Children’s Health. (s. f.). <em>Anatomía del sistema respiratorio</em>.',
      link:
        'https://www.stanfordchildrens.org/es/topic/default?id=anatomy-of-the-respiratory-system-85-P04400',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
