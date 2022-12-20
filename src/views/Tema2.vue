<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Alistamiento 

    p En el alistamiento se deben de seguir una serie de pasos, los cuales nos permitirán entregar o brindar los servicios requeridos por los clientes. El primero es preparación de los equipos y #[i software], el segundo, la instalación de las aplicaciones, teniendo en cuenta qué tipo de #[i software] se utiliza.

    <Separador></Separador>
    #t_2_1.titulo-segundo.color-primario.mt-5
      h2 2.1 Tipo de #[i software] asociado

    p Hay tres grupos de tipos de #[i software] asociados importantes y se dividen en estos componentes de computadora:   

    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img1.png', alt='alt')
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="<i>Software</i> del sistema").px-5.py-2
            p.mb-0 La gama de programas preinstalados en una computadora o sistema informático se denomina #[i software] de sistema o #[i software] base, que permite la interacción con el sistema operativo (el #[i software] que controla el funcionamiento de todo el sistema y lo mantiene en funcionamiento) para dar soporte a otros programas y proporcionar control digital del #[i hardware.]
            p.mb-0 No debe confundirse con el #[i software] básico, que suele ser muy simple, inaccesible para la mayoría de los usuarios y controla el potencial físico de la computadora de acuerdo con las instrucciones del sistema operativo. 
            p.mb-0 Por ejemplo, diferentes sistemas operativos pueden administrar el mismo #[i software] subyacente porque son presentaciones comerciales de programas que administran el #[i software] del sistema de una forma u otra. Sin embargo, en muchos casos los dos términos se usan indistintamente.
            p.mb-0 Las funciones principales del #[i software] del sistema incluyen el control de transferencia de recursos, la gestión de la memoria RAM, el acceso a dispositivos externos o discos duros, en resumen, sin estas funciones, ningún sistema puede funcionar correctamente.
          div(titulo="Programación de <i>software</i>").px-5.py-3
            p.mb-0 Un lenguaje de programación o #[i software] de programación es el nombre que se le da a los programas que permiten crear y desarrollar otros programas informáticos. Se llaman así porque contienen lenguajes formales o protocolos para organizar procesos algorítmicos y lógicos que, luego, son realizados por sistemas informáticos para lograr diversos objetivos. Con este tipo de #[i software] se pueden crear uno a uno #[i software] de aplicación, #[i software] de sistema e, incluso, otros lenguajes de programación.
          div(titulo="<i>Software</i> de aplicación").px-5.py-3
            p.mb-0 Se entiende por #[i software] de aplicación todos los programas que no están relacionados con el funcionamiento de la computadora, pero que se instalan en el sistema para realizar una función específica y definida: herramientas de trabajo, tales como hojas de cálculo, procesadores de texto, programas de diseño gráfico; programas de entretenimiento como videojuegos, reproducción de audio o video, o #[i software] de información simple como enciclopedias digitales, navegadores de internet, etc.

    h3.mt-5.mb-5 Ejemplos de software del sistema
    p Se presentan, a continuación, algunos ejemplos posibles de software del sistema

    .row.justify-content-center
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          .row.justify-content-center.margenes-img
              figure
                img(src='@/assets/curso/temas/tema2/img2.png', alt='alt') 

        .tarjeta.color-tarjeta-punto-caliente(x="95%" y="40%" numero="1" )  
          .row.justify-content-center.p-4
            p Programas encargados de ejecutar otros programas y garantizar la estabilidad del sistema. 


        .tarjeta.color-tarjeta-punto-caliente(x="82%" y="76%" numero="2" )  
          .row.justify-content-center.p-4
            p  De hecho, muchos de sus componentes se deben a que ciertas partes del sistema operativo son parte de otros aspectos de cómo funciona el sistema.

        .tarjeta.color-tarjeta-punto-caliente(x="57%" y="90%" numero="3" )  
          .row.justify-content-center.p-4
            p Como garante del correcto estado de equipos o fuentes de alimentación, termómetros, etc. 

        .tarjeta.color-tarjeta-punto-caliente(x="23%" y="78%" numero="4" )  
          .row.justify-content-center.p-4
            p El sistema básico de entrada y salida (#[i Basic Input and Output System]) es el programa de información básica del sistema de control que garantiza la comunicación entre la computadora y el mundo exterior. 

        .tarjeta.color-tarjeta-punto-caliente(x="10%" y="40%" numero="5" )  
          .row.justify-content-center.p-4
            p Las instrucciones preprogramadas en el sistema le permiten priorizar funciones muy simples e importantes.

    <Separador></Separador>
    #t_2_2.titulo-segundo.color-primario.mt-5
      h2 2.2 Protocolo de servicio            

    .row.justify-content-center.mt-5
      .col-md-7
        p Se presenta a continuación información sobre el protocolo de servicio como parte de la forma en que se debe proceder con el cliente al momento de interactuar con este.
        p El protocolo de atención al cliente es una guía, paso a paso, que describe cómo deben comportarse los empleados con los clientes al establecer contactos y realizar un seguimiento de las interacciones. Incluye la visión de la empresa y los estándares de excelencia en el servicio, asegurando una comunicación y comunicaciones efectivas.
        p Tener un protocolo de atención al cliente no solo le permite establecer parámetros de comunicación, sino que también garantiza que sus empleados sigan las mismas líneas de comunicación para responder las preguntas y quejas de los clientes sin encontrar obstáculos.
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img3.png', alt='alt')

    <Separador></Separador>
    #t_2_3.titulo-segundo.color-primario.mt-5
      h2 2.3 Protocolo de servicio            

    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img4.png', alt='alt')
      .col-md-7
        p Protocolo y etiqueta son un conjunto de normas y comportamientos que una persona debe tener ante un evento como persona.
        p El uso de estas nos permite desenvolvernos adecuadamente en diferentes entornos. 
        p En todo sistema de eventos ya sean sociales, eventos familiares o grandes ceremonias, es importante garantizar el respeto mutuo en el entorno, siendo este un elemento que nos permite relacionarnos bien con los demás y vivir mejor. 
        p En todos los aspectos la ética es muy importante en el desarrollo del entorno, a nivel empresarial se puede definir como los valores y principios morales que tiene la empresa en relación con los clientes a quienes atiende, de tal manera que al mostrar transparencia y responsabilidad obtiene la confianza de los mismos.   
        p Es importante definir el código de conducta que dicta y limita la relación de las personas con los demás sobre la base del respeto y las costumbres aceptadas en la sociedad, algunos de estos son: saludar a familiares, amigos y conocidos con calidez y respeto, abstenerse de insultos, hospitalidad hacia los huéspedes, llevar ropa adecuada, buenos modales en la mesa, puntualidad, etc. 





</template>

<script>
export default {
  name: 'Tema2',
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
