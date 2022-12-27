<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Problema de soporte

    .row.justify-content-center
      .col-md-7.mt-5
        .bloque-texto-b.color-bloque-texto-verde.mb-3
          .bloque-texto-b__texto
            p El soporte técnico por teléfono o también llamada mesa de ayuda es un experto en mantenimiento de computadoras que ayuda a los clientes remotos a resolver los problemas que se encuentren al usar los equipos informáticos, especialmente, cuando el dispositivo no funciona. 
        p El servicio se proporciona de forma remota (teléfono), cuando el técnico de soporte trabaja en el centro de servicio (departamento de soporte técnico) puede brindar soporte a clientes de diferentes empresas. Este servicio es proporcionado por personal especializado en informática o mantenimiento, denominado técnico.
        p A continuación, se presentan los diferentes tipos de problemas de soporte que se pueden presentar, así como la clasificación de los mismos.

      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img1.png', alt='alt')

    <Separador></Separador>
    #t_1_1.titulo-segundo.color-primario.mt-5
      h2 1.1 Tipos de problemas

    p.mt-5.mb-5 Existen varios tipos de problemas. Los problemas técnicos incluyen todos los inconvenientes y fallas que pueden causar los dispositivos y sistemas técnicos. Le mostraremos todo sobre problemas técnicos.
    p.mt-5.mb-5 Hoy en día, es poco probable que alguien no enfrente algún problema técnico en su vida. Se tienen problemas técnicos en la oficina, con computadoras, teléfonos móviles, redes sociales y muchas otras plataformas. Cualquier cosa que dependa de la tecnología enfrenta desafíos similares. Los problemas técnicos varían según el tipo de tecnología y algunos de ellos son muy comunes.

    TabsC.color-primario.mb-5
      .py-3.py-md-4.bg-tabc(titulo="Problemas técnicos en portátiles")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0.mt-5
            p Para muchos, las computadoras portátiles son la computadora preferida por razones como: la capacidad, el peso ligero, la facilidad para desplazarla a cualquier lugar, la duración de la batería y el bajo consumo de cable. Las personas suelen utilizarlas para el trabajo y el estudio. Algunos de los problemas técnicos que se pueden presentar en su mayoría son relativamente fáciles de resolver. Algunos de los errores más comunes de las computadoras portátiles son la duración de la batería, el sobrecalentamiento, los problemas de conectividad inalámbrica, problemas de #[i software] sistema operativo, #[i drivers], bloqueos de la cámara web y la poca memoria.
          .col-lg-5.mt-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img2.png', alt='').img400.m-auto

      .py-3.py-md-4.bg-tabc(titulo="Problemas técnicos de navegadores")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0.mt-5
            p.mt-5 Los navegadores de internet son un ejemplo perfecto de falla técnica. Este tipo de falla suele estar relacionada con la computadora, pero a veces no. En algunos casos, el error está en el programa navegador y suele ser causado por virus. Algunos de estos problemas técnicos incluyen rendimiento lento, cierre automático de páginas, carga lenta e inconsistencias al momento de navegar.
          .col-lg-5.mt-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img3.png', alt='').img400.m-auto

      .py-3.py-md-4.bg-tabc(titulo="Problemas técnicos en el Wi-Fi")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0.mt-5
            p.mt-5 Conectarse a internet puede convertirse en una pesadilla cuando nuestros dispositivos no pueden acceder a la red debido a las interrupciones del Wi-Fi. Algunos de estos problemas son la falta de disponibilidad de la red, la desconexión espontánea, la conexión lenta, la incompatibilidad del dispositivo y la falla del enrutador.
          .col-lg-5.mt-2
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img4.png', alt='').img400.m-auto 

      .py-3.py-md-4.bg-tabc(titulo="Problemas técnicos en la red LAN")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0.mt-5
            p.mt-5 Es la red que conecta varias computadoras en la sala o edificio local. Esto suele ser común en oficinas corporativas y universidades donde se necesita sincronizar dispositivos del mismo sistema. Este tipo de red falla regularmente y muchos de estos errores incluyen dificultades de direcciones IP, fallas de enrutadores, conflictos de enlaces, fallas de tarjetas de enlace y ancho de banda insuficiente.
          .col-lg-5.mt-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img5.png', alt='').img400.m-auto  

    <Separador></Separador>
    #t_1_2.titulo-segundo.color-primario.mt-5
      h2 1.2 Clasificación de problemas

    p.mt-5.mb-5 Los problemas de soporte se clasifican en los siguientes cuatro elementos:
    h3.mt-5.mb-5  Problemas de arranque
    p.mb-5 Son más evidentes a simple vista. El dispositivo no envía ninguna señal a la pantalla y ni siquiera recibe la luz frontal de la carcasa. En el primer caso, puede haber una falla de componentes importantes relacionados con la carga:      

    .row.justify-content-center.margenes-img
      figure(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema1/img6.png', alt='').img400.m-auto 

    .row.justify-content-center.mt-5
      .col-md-7
        p Al hundir el interruptor de encendido, los LED en la parte frontal del dispositivo no responden. El problema parece ser aún mayor. Este tipo de avería afecta, primero, a la fuente de alimentación y, luego, genera un posible cortocircuito en el interior del aparato.
        p Un cortocircuito en una computadora puede ocurrir como resultado de una descarga externa significativa, la conexión de dos componentes del circuito en una placa de circuito, en una placa de expansión o una sección lógica de un disco duro. Esa conexión innecesaria entre dos puntos en el circuito cuando dos pines o pistas entran en contacto puede causar un cortocircuito.
        p La solución de este problema se basa en la inspección visual de cada componente para encontrar la posible falla (muchas veces basta con desconectarlos para regresar a la normalidad), en lugar de chequear los componentes antes de conectarlos y volver a prender el equipo.
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img7.png', alt='alt')

    h3.mt-5.mb-5  Problemas inesperados
    p.mb-5 Es el problema más común, cuyo efecto suele dar un gran dolor de cabeza a los usuarios cuando no han guardado anticipadamente el trabajo durante la congelación, ya que, por lo general, se congela el programa o dispositivo hasta que se reinicia.

    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img8.png', alt='alt')
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="Manifestación").px-5.py-2
            p Esta clase de problemas se manifiesta de varias formas:
            ol.lista-ol--cuadro
              li > Congelamiento espontáneo del equipo.
              li > Mensajes de error.
              li > Pantallas azules.
              li > Cierre inesperado del <i>software</i> (programas).
              li > Reinicio inesperado del equipo.                                
          div(titulo="Causas").px-5.py-3
            ol.lista-ol--cuadro
              li > Memorias RAM incompatibles o dañadas.
              li > Temperatura excesiva (procesador, disco duro, placa de video).
              li > Tarjeta madre defectuosa.
              li > <i>Overclocking</i>.
              li > Memoria caché L1 o L2 dañada.
              li > Incompatibilidad entre aplicaciones (antivirus, <i>firewall</i>, etc.).
              li > Controlador de dispositivos mal depurado o dañado.
              li > Infección de virus.


    h3.mt-5.mb-5  Problemas de rendimiento
    p.mb-5 Los problemas de rendimiento están mayormente relacionados con el #[i software], principalmente, el sistema operativo. Algunas de estas actividades pueden ser una mejor solución que comprar una computadora cada vez que nos encontramos con que funciona mal, es muy lento o dificulta el desarrollo. Algunas fallas relacionadas con el #[i software] en general son:         

    .row.justify-content-center.mt-5.mb-5
      .col-md-7
        LineaTiempoD.color-acento-contenido.mt-5
          p(numero="1" titulo="Compruebe los programas en ejecución") Compruebe los programas en ejecución: presione “control + alt + eliminar”, vaya a la pestaña "proceso" y verifique lo que se está ejecutando. A veces, su PC funciona lentamente debido a que muchas aplicaciones se ejecutan al mismo tiempo y puede deberse a la falta de RAM. Elimine los procesos que no necesita.
          p(numero="2" titulo="Eliminar virus y troyanos") Eliminar virus y troyanos: si un virus, caballo de Troya o #[i spyware] ingresa a su computadora es probable que vuelva a suceder. Obtenga un buen antivirus, escanee y elimine todas las infecciones. Si instala una aplicación que ralentiza mucho su computadora, considere instalar otra aplicación que funcione mejor para usted.
          p(numero="3" titulo="Aumente la memoria RAM") Aumente la memoria RAM: muchas computadoras se compraron temprano en el negocio y no se han actualizado desde entonces. Si cree que no necesita invertir en una computadora nueva, al menos, debe actualizar su RAM.
          p(numero="4" titulo="No trabaje con programas muy pesados") No trabaje con programas muy pesados: si su computadora no está diseñada para admitir la reproducción de ciertos programas, como videos, hay algunas cosas que puede hacer. Cambie la tarjeta de video, aumente la memoria RAM o busque otros programas que sean más adecuados para el #[i hardware] que tiene.
          p(numero="5" titulo="Limpia el navegador de basura") Limpia el navegador de basura: muy a menudo, lo que afecta el rendimiento de una computadora no es más que complementos instalados en el navegador, a veces, muy peligrosos y, a veces, simplemente molestos. Si no está seguro de qué barra de herramientas ha descargado, vaya a Herramientas > Complementos de su navegador y elimine los que no necesite.
          p(numero="6" titulo="Utilice un sistema operativo menos exigente") Utilice un sistema operativo menos exigente: trabajar con una versión antigua del sistema operativo cuando se tiene poca RAM puede generar muchos problemas. Por lo tanto, es mejor actualizar el sistema a versiones más recientes que son mucho más eficientes. 
          p(numero="7" titulo="Vacía la computadora") si está utilizando espacio disponible en el disco duro, obtendrá un cartel informativo de que no queda espacio en la memoria. Si tiene problemas para guardar archivos, puede guardarlos en la nube con una copia de respaldo y, luego, descargar lo que necesita.
      .col-md-5.mt-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img9.png', alt='alt')           
           
    h3.mt-5.mb-5  Problema del #[i hardware] en general
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    h3.mt-5.mb-5  #[i Software]
    .tarjeta.color-tarjeta-verde.margenes-img
      .row.justify-content-center.mt-5.mb-5
        .col-md-7.mt-5
          .cajon.color-acento-botones.color-secundario-cajon-beige.p-3
            .row.justify-content-center.p-3 
              p Es una palabra inglesa tomada de otros idiomas y designa cualquier componente no físico que forma parte del #[i hardware] de computadoras, teléfonos móviles o tabletas y le permite funcionar. 
              p El #[i software] consiste en un grupo de aplicaciones y #[i software] diseñado para realizar varias funciones dentro del sistema. Además, incluye información del usuario y datos procesados. El #[i software] es una pieza que se comunica con el #[i hardware] (la parte física de un dispositivo), a través de instrucciones y pasos.

          p.mt-5 Hay muchos ejemplos de programas, categorizados por su función en:
          ol.lista-ol--cuadro
            li > <i>Software</i> de edición de imágenes: Por ejemplo: Adobe Photoshop, Paintshop y GIMP. 
            li > <i>Software</i> de procesador de textos: Por ejemplo: Microsoft Word, Word Pad y Notepad. 
            li > <i>Software</i> de audio: Ejemplos: Adobe Audition, Ableton y Pro Tools. 
            li > <i>Software</i> de comunicación. Por ejemplo: Facebook, Skype, Zoom.
            li > <i>Software</i> de diseño y arquitectura. Por ejemplo: AutoCAD, Adobe Illustrator, Revit.
            li > <i>Software</i> de contabilidad. Por ejemplo: Loggro, Xero, Nubox.
            li > <i>Software</i> de sistema operativo. Por ejemplo: Linux, MacOS, Windows.
            li > <i>Software</i> de protección contra virus. Por ejemplo: AVG Antivirus, McAfee, Panda.
            li > <i>Software</i> de programación. Por ejemplo: Microsoft Visual Studio, Xcode, Lazarus.  

         
        .col-md-4.mt-5
          figure(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema1/img10.png', alt='alt')           

    h3.mt-5.mb-5  #[i Hardware]
    p.mb-5 Se presentan a continuación algunos conceptos esenciales sobre el #[i hardware.]

    SlyderA(tipo="b").slyder-amarillo
      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="01")
            h4.ps-4 Definición
            p.ps-4.mb-3 Todos los componentes físicos de un dispositivo hacen parte del #[i hardware], es decir, aquellos que se pueden ver y tocar. El monitor, el ratón, la CPU, el teclado o la memoria RAM son algunos ejemplos de partes que, cuando se combinan, forman el #[i hardware]. 
            p.ps-4.mb-0 El término es de origen inglés, donde #[i "hard"] significa "duro" y #[i "ware"] significa "algo", por lo que también puede definirse como #[i "hard parts"] o “partes duras” de la computadora. 
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img11.png')
      .row.justify-content-center.my-lg-4            
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="02")
            h4.ps-4 Tipo
            p.ps-4.mb-0 Hay dos tipos distintos:
            p.ps-4.mb-3 #[i -Interior]: dentro de una torre de computadora, como cables, placas de circuitos, CPU o dispositivos de almacenamiento.

            p.ps-4.mb-0 #[i -Periféricos]: ubicados fuera de la torre de la computadora. Entre estos tenemos dispositivos de entrada que brindan información al sistema, como un ratón o teclado; el dispositivo de salida, que informa sobre las operaciones realizadas en la computadora, como un monitor o una impresora; y los periféricos de E/S realizan las dos funciones anteriores, como USB.
        .col-6.col-lg-4
          figure.m-top
            img(src='@/assets/curso/temas/tema1/img12.png')  

      .row.justify-content-center.my-lg-4            
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="03")
            h4.ps-4 Elementos esenciales
            p.ps-4.mb-0 Entre todos estos componentes, el #[i hardware] se divide en elementos esenciales, para referirse a aquellos que son parte integral del funcionamiento de una computadora, como la placa base, el teclado, la CPU, la memoria RAM o el monitor y complementos específicos como una impresora o un #[i pen drive.]  
                      
        .col-6.col-lg-4
          figure.mt-5
            img(src='@/assets/curso/temas/tema1/img13.png')                       
     

      .row.justify-content-center.my-lg-4            
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="04")
            h4.ps-4 #[i Hardware] libre
            p.ps-4.mb-0 Además, en los últimos tiempos se ha potenciado el concepto de #[i hardware] libre. El término se utiliza para designar componentes de hardware cuyos diseños y esquemas están disponibles públicamente, de forma gratuita o mediante alguna forma de pago. Sin embargo, esta sigue siendo una noción desconcertante incluso para los autores que intentan definirla.
                        
        .col-6.col-lg-4
          figure.mt-5
            img(src='@/assets/curso/temas/tema1/img14.png')  
    
    <Separador></Separador>
    #t_1_3.titulo-segundo.color-primario.mt-5
      h2 1.3 Herramienta

    .row.justify-content-center
      .col-md-12.mt-5
        .cajon.color-primario.segundo-color-cajon-azul.p-3
          .row.justify-content-center.p-3    
            p Es cualquier programa o manual que facilita una tarea, pero, también, se puede hablar del #[i hardware] o los accesorios como herramientas. Es muy importante utilizar las herramientas correctamente para cada tarea. Algunas de estas herramientas son:              
            .row.justify-content-start
              .col-md-2
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img15.png')  
              .col-md-10
                p #[span.text-bold Herramientas manuales:] son un documento técnico que explica la funcionalidad del #[i software] o sistema desarrollado como producto generado por un proyecto.
                p Muestra los procesos que el usuario puede ejecutar con el sistema implantado. Para lograr esto es necesario detallar cada característica que tiene el programa y cómo se accede e ingresa la información.
                p Permite a los usuarios ver, en detalle, las actividades que necesitan desarrollar para lograr los objetivos del sistema. Recoge la información, normas y documentos necesarios para que el usuario conozca la aplicación desarrollada y la utilice adecuadamente.
            
            .row.justify-content-start
              .col-md-8.mt-5
                p #[span.text-bold Herramientas informáticas:] son un conjunto de herramientas, digitales o físicas, que se utilizan para gestionar información mediante un ordenador, como: procesadores de texto, bases de datos, hojas de cálculo, correos electrónicos, buscadores, diseños, telecomunicaciones, etc. 
                p Por lo tanto, las herramientas de TI, a menudo, se denominan herramientas tecnológicas. Estas herramientas facilitan la realización de una tarea en un dispositivo técnico, por lo que lo ayudan a lograr los resultados que desea. Mediante estas herramientas es posible ahorrar tiempo y recursos.               
              .col-md-4.mt-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/tema1/img16.png')  

    h3.mt-5.mb-5 Herramientas informáticas
    p.mb-5 A continuación, se presentan algunas herramientas informáticas y sus funciones.

    .bg_slyder.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.ps-4.mb-3 #[span.text-bold Procesador de textos:] se utiliza para crear información de documentos a partir de extensiones de contenido cortas, medianas y largas. Contiene barras de herramientas que permiten editar texto, además de usar fuentes y tamaños. Son esenciales en contextos empresariales y académicos. 
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img17.png')

        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              p.ps-4.mb-3 #[span.text-bold Hojas de cálculo:] son muy útiles, dado que tienen muchas funciones y fórmulas matemáticas, algebraicas y de ingeniería. Se pueden crear gráficos para que los datos sean más fáciles de mostrar y posibilitan la organización de grandes cantidades de datos. 
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img18.png')

        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              p.ps-4.mb-3 #[span.text-bold Compartir y almacenar información en internet:] almacene y comparta información en la nube de la computadora, para que pueda ahorrar espacio de almacenamiento en sus dispositivos, como computadoras portátiles, computadoras o teléfonos inteligentes.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img19.png')              

        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="04")
              p.ps-4.mb-3 #[span.text-bold #[i Presentation designer:]] facilita el diseño de imágenes o formas que ayudan a explicar un contenido específico, como mapas conceptuales con definiciones de un tema o mapas de pensamiento con la capacidad de relacionar información clave relacionada con el tema. Son ampliamente utilizados en instituciones académicas.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img20.png') 






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
