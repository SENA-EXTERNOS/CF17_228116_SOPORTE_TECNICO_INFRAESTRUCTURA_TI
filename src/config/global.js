export default {
  global: {
    componenteFormativo: 'Soporte técnico a la infraestructura TI',
    descripcionCurso:
      'El personal de soporte técnico TI garantiza la disponibilidad y operación a las empresas o clientes para brindar un buen servicio que resuelva todo tipo de problemas relacionados con el mantenimiento del hardware, software y la red de computadores. Puede hacerlo de forma personal o remota, por diferentes medios de comunicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Problema de soporte',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Alistamientos ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Hardware</i>',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: '20 fallos comunes en el computador',
      referencia:
        'Artiaga, G. (2013). 20 fallas comunes de una computadora. B studios México [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/8HpCkJQBrGM',
    },
    {
      tema: 'Arquitectura de <i>Hardware</i> - Info Educativa',
      referencia:
        'Info educativo. (2020). Arquitectura de <i>Hardware</i>. Info Educativa [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/hLwWgZk7AGg',
    },
    {
      tema: 'Periféricos de entrada y salida',
      referencia:
        'Todo code (2022). Periféricos de entrada y salida.[Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/9r88MHfDrho',
    },
    {
      tema: 'El <i>software</i> y <i>hardware</i>',
      referencia:
        'Lifider Educación (2022). El <i>software</i> y el <i>hardware</i> explicados: tipos y ejemplos. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/_eg31SXhr2g ',
    },
  ],
  glosario: [
    {
      termino: '<i>Firmware</i>',
      significado:
        'el soporte lógico inmutable es un programa informático que define la lógica de nivel más bajo que controla los circuitos electrónicos de cualquier dispositivo.',
    },
    {
      termino: 'Información',
      significado:
        'tiene relación directa o indirecta con las funciones de la entidad: <i>software, hardware</i>, personas (roles), físicos (instalaciones, áreas de almacenamiento de expedientes, centros de procesamiento de datos), intangibles (imagen y reputación).',
    },
    {
      termino: 'LAN',
      significado:
        'es una red informática que permite la comunicación y el intercambio de datos entre diferentes dispositivos a nivel local, ya que está limitada a distancias cortas.',
    },
    {
      termino: '<i>Overclocking</i>',
      significado:
        'es la práctica de aumentar la velocidad del reloj de un componente electrónico más allá de las especificaciones del fabricante.',
    },
    {
      termino: 'PCI',
      significado:
        'este es el método más común para conectar tarjetas controladoras adicionales a la placa base de la computadora.',
    },
    {
      termino: 'Remota',
      significado:
        'es aquella actividad en la que el soporte técnico y el cliente están físicamente distantes.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hace posible la realización de tareas específicas.',
    },
    {
      termino: 'Tarjeta madre',
      significado:
        'es el circuito que compone los componentes de la computadora que están conectados a él. Es un componente esencial para montar una computadora de escritorio, computadora portátil o dispositivo personal.',
    },
    {
      termino: 'TI',
      significado:
        'la tecnología de la información es el uso de computadoras y equipos de telecomunicaciones para almacenar, recuperar, transmitir y procesar datos, a menudo utilizados en relación con negocios u otros esfuerzos.',
    },
    {
      termino: 'Wi-Fi',
      significado:
        'tecnología que permite conectar diferentes equipos informáticos a través de una red inalámbrica de banda ancha.',
    },
  ],
  referencias: [
    {
      referencia:
        'Almond, G. (1996). <i>Political Science: The History of the Discipline, A New Handbook of Political Science</i>. In: R. E. Goodin and H. D. Klingemann (ed.). Oxford University Press. pp. 64-89. ',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_nlinks&pid=S1405-0218200200020011900005&lng=en',
    },
    {
      referencia:
        'Corrales, J. (2019). <i>Servicio al cliente ¿Qué es y por qué es un pilar de las empresas exitosas?</i>. [Documento web] ',
      link: 'https://rockcontent.com/es/blog/servicio-al-cliente/',
    },
    {
      referencia:
        'Icontec internacional. (1999). <i>Guía técnica colombiana</i>. Docplayer',
      link: 'https://docplayer.es/77035573-Guia-tecnica-colombiana-62.html ',
    },
    {
      referencia:
        'Información, T. (2018). <i>La arquitectura de servidores: Clientes – Servidor y Multicapa.</i> [Documento web] ',
      link:
        'https://www.tecnologias-informacion.com/arquitectura-servidores.html ',
    },
    {
      referencia:
        'Muñoz, J. (2014). <i>Diagrama de concepto de solución</i>. [Documento web] ',
      link:
        'https://chae201411700521596.wordpress.com/2014/07/15/diagrama-de-concepto-de-solucion/ ',
    },
    {
      referencia:
        'Rodríguez, J. (2006). <i>La importancia del servicio al Cliente</i>. [Documento web] ',
      link:
        'https://kipdf.com/download/la-importancia-del-servicio-al-cliente-contenido-general-del-curso_5aafba5a1723dd429c74ebee.html ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
