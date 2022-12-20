<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 #[i Hardware]

    p Es la parte física de una computadora o sistema informático. Se compone de componentes eléctricos, electrónicos, electromecánicos y mecánicos tales como circuitos eléctricos, circuitos, memorias, discos duros, periféricos y todos los demás materiales en condiciones físicas para el funcionamiento de cualquier dispositivo.  


    <Separador></Separador>
    #t_4_1.titulo-segundo.color-primario.mt-5
      h2 4.1 Arquitectura de #[i hardware]

    
    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img1.png', alt='alt')
      .col-md-7
        p La arquitectura de #[i hardware] es el diseño conceptual y la estructura operativa básica de un sistema informático. Es decir, es un modelo y una descripción funcional de los requisitos de diseño e implementación para diferentes partes de una computadora, con especial atención a cómo la CPU opera internamente y accede a las direcciones de memoria. También se define a menudo como la forma en que se seleccionan y conectan los componentes de #[i hardware] para construir computadoras en función de los requisitos funcionales, el rendimiento y el costo.
        p Las computadoras reciben y transmiten información a través de dispositivos que utilizan canales. Una computadora personal es responsable de procesar la información. La información debe intercambiarse con dispositivos periféricos y CPU. Todas las unidades del sistema, excepto la CPU, se denominan periféricos, por lo que una computadora tiene dos partes completamente diferentes, a saber: la CPU (responsable de ejecutar programas y compuesta por memoria principal, Unidades Aritméticas Lógicas (UAL) y controladores) y el periférico, donde están los dispositivos que pueden ser de entrada, salida o conexión.


    <Separador></Separador>
    #t_4_2.titulo-segundo.color-primario.mt-5
      h2 4.2 Tipo de equipos

    p El equipo se divide en cinco categorías según el rendimiento de sus componentes.

    SlyderA(tipo="b").slyder-amarillo
      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="01")
            h4.ps-4 #[i Hardware] de procesamiento
            p.ps-4.mb-3 Corresponde a la Unidad Central de Procesamiento, o UCP, el centro de operaciones lógicas de la computadora, donde se interpretan y ejecutan las funciones necesarias para el funcionamiento del resto de los componentes.            
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img2.png')

      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="02")
            h4.ps-4 #[i Hardware] de almacenamiento
            p.ps-4.mb-3 Como su nombre indica, se refiere a todos los componentes cuya función es proteger la información para que el usuario pueda acceder a ella en cualquier momento. El dispositivo principal en este caso es la memoria RAM (memoria de acceso aleatorio), pero también consta de almacenamiento secundario, como discos duros, SSD o almacenamiento USB.
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img3.png')       

      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="03")
            h4.ps-4 #[i Hardware] gráfico
            p.ps-4.mb-3 Se compone principalmente de tarjetas gráficas que cuentan con su propia memoria y CPU y se encargan de interpretar y ejecutar señales para crear una imagen. El hecho de que esta función no recaiga en la CPU está relacionado con la eficiencia, pues el sistema funciona de manera óptima al reducir la memoria principal de estas funciones.
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img4.png')        

      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="04")
            h4.ps-4 #[i Hardware] gráfico
            p.ps-4.mb-3 Son aquellos dispositivos que se encuentran afuera de una computadora y permiten la comunicación entre una persona y el ordenador. Estos elementos garantizan la entrada o salida de información desde la misma computadora. Se llaman periféricos porque se sientan alrededor de la computadora y actúan como memoria secundaria a la memoria principal. Estas unidades de #[i hardware], un grupo de #[i hardware] o componentes físicos que componen un sistema informático funcionan gracias a un #[i software] que permite que la computadora realice ciertas tareas.
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img5.png')    

      .row.justify-content-center.my-lg-4
        .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
          .number(data-number="05")
            h4.ps-4 #[i Hardware] y #[i software]
            p.ps-4.mb-3 para el funcionamiento normal del #[i hardware] también se necesita el #[i software], que es la parte lógica de la informática y no es tangible. Allí se codifica cualquier instrucción o tarea realizada por un sistema electrónico. El #[i software] incluye todo, desde un sistema operativo hasta aplicaciones de escritorio que le permiten realizar tareas específicas, como editores de texto o imágenes.
        .col-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img6.png')                                     


    h3.mt-5.mb-5 Dispositivos periféricos
    p.mb-5 A continuación, se presenta información sobre los dispositivos periféricos:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-blanca")
      .row(titulo="Periféricos de entrada")
        .col-md-6.mb-4.mb-md-0
          p Un dispositivo de entrada es cualquier #[i hardware] que envía datos (texto, números, sonido, gráficos, video, movimiento, temperatura, tacto, etc.) a una computadora. Son necesarios para interactuar con ellas y controlarlas. Estos datos, ingresados por otros usuarios o dispositivos, son capturados, digitalizados y enviados a una computadora para su procesamiento.
          p Los periféricos más conocidos y habituales son:
          ol.lista-ol--cuadro
            li > Teclado: la información se ingresa a través de sus teclas.
            li > Ratón: permite enviar información haciendo clic en sus botones y mediante su movimiento. 
            li > Micrófono: se utiliza para introducir sonido en la computadora.
            li > Escáner: convierte páginas escaneadas o imágenes de materiales impresos, como periódicos, revistas y carteles, en datos digitales para que los utilicen ciertos programas.
            li > Escáner de código de barras o QR: es una forma de ayudar a organizar y mostrar la información del producto.
            li > Cámara web: las imágenes se recopilan desde el exterior y se envían a una computadora para su procesamiento.
        .col-md-6.mt-5
          figure
            img(src='@/assets/curso/temas/tema4/img7.png', alt='')

      .row(titulo="Periféricos de salida")
        .col-md-6.mb-4.mb-md-0
          p Se sabe que los dispositivos de salida reciben datos de la computadora y muestran los procesos en ejecución al usuario. La mayor parte de la información destinada a publicidad, comunicaciones, advertencias, etc. se vuelve clara y comprensible para cualquier persona. Los más utilizados son los siguientes:
          ol.lista-ol--cuadro
            li > Altavoces o auriculares: reproducen el sonido del exterior a través del teléfono, radio, amplificación o equipo de transmisión.
            li > GPS: es un sistema de navegación y posicionamiento. 
            li > Proyectores digitales: toman una señal de video de una computadora y la convierten en luz usando un espejo para proyectar una imagen sobre una superficie.
            li > Impresoras: se encuentran entre los dispositivos de salida más importantes para reproducir en papel los resultados de los datos procesados por el dispositivo. 
        .col-md-6.mt-5
          figure
            img(src='@/assets/curso/temas/tema4/img8.png', alt='n')

      .row(titulo="Periféricos de entrada y salida mixtos")
        .col-md-6.mb-4.mb-md-0
          p Estos dispositivos le permiten enviar información a la computadora (entrada) y recibir datos de la computadora (salida). Su función principal es almacenar, de forma permanente o virtual, cosas hechas para que otros usuarios o sistemas puedan usarlas. Algunos ejemplos son:
          ol.lista-ol--cuadro
            li > Pantalla táctil: usted interactúa con su computadora tocando palabras o imágenes en la pantalla (dispositivo de entrada). Los datos que se muestran en la pantalla se recopilan de la computadora (dispositivo de salida). 
            li > Enrutador: envía y recibe datos a través de una red informática, como internet.
            li > Fax: envía y recibe documentos de texto.
            
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img9.png', alt='n')   

      .row(titulo="Periféricos de almacenamiento")
        .col-md-6.mb-4.mb-md-0
          p Estos dispositivos se utilizan para almacenar información y datos durante un período de tiempo determinado. La mayoría de ellos son E/S porque ambos permiten tomar información de la computadora y guardarla en el dispositivo, y los datos almacenados se pueden copiar desde el dispositivo y copiar a la computadora. Estos son algunos dispositivos de almacenamiento:
          ol.lista-ol--cuadro
            li > Disco duro.
            li > Disco duro externo.
            li > Disco Compacto (CD), Disco Versátil Digital (DVD), etc.
            
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='n')                       


    <Separador></Separador>
    #t_4_3.titulo-segundo.color-primario.mt-5
      h2 4.3 Tipos de puerto

    p Se presenta a continuación el concepto de puerto y los tipos que se encuentran.

    .bg_slyder.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")   
              h4 Definición           
              p.mb-3 Un puerto es una interfaz a través de la cual se envían y reciben diferentes tipos de datos. En electrónica, telecomunicaciones y #[i hardware], una interfaz es un puerto a través del cual se envían o reciben señales de un sistema o subsistema a otro.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img11.png')

        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")   
              h4 Puertos físicos           
              p.mb-3 Estos son conectores integrados en una tarjeta de expansión o en la placa base de la computadora. Está especialmente diseñado con características electrónicas para conectar varios dispositivos externos o periféricos a la computadora. Los conectores hembra, generalmente, se encuentran en placas base o cajas, mientras que los conectores macho se encuentran en dispositivos o cables. 
          .col-6.col-lg-5.mt-5
            figure
              img(src='@/assets/curso/temas/tema4/img12.png')  

        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")   
              h4 Puerto lógico           
              p.mb-3 Son puntos de acceso entre ordenadores para utilizar servicios y transferir datos entre ellos.
              ol.lista-ol--cuadro
                li > PCI.
                li > PCI exprés.
                li > Puertos de memoria.
                li > Puertos de inalámbricos.
                li > Puertos de USB.

          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img13.png')                           

    .row.justify-content-center.mt-5.mb-5
      .col-md-10.mt-5
        .cajon.color-acento-botones.color-secundario-cajon.p-3
          .row.justify-content-center.p-3 
            p Tenga en cuenta que el componente formativo dispone de más recursos que se ubican en este, para ello diríjase al menú principal en donde encontrará, entre otros: la síntesis, actividad didáctica y el material complementario.


</template>

<script>
export default {
  name: 'Tema4',
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
