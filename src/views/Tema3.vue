<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Normas 

    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img1.png', alt='alt')
      .col-md-7
        .bloque-texto-b.color-bloque-texto-verde-2
          .bloque-texto-b__texto
            p Las normas se encuentran en cualquier parte, nos protegen a todos, porque son el resultado de investigación y desarrollo tecnológico comprobado. Los productos que se fabrican con estándares razonables son más seguros, de buena calidad y contienen información para guiar a los consumidores. Además, aseguran la compatibilidad de sus productos y la disponibilidad de repuestos que alargan su vida útil. Así mismo, facilitan el comercio, ayudan a regular los mercados, permiten la transferencia de tecnología y promueven el crecimiento económico y la confianza pública.
  

    #t_3_1.mt-5
      h3 Tipo de garantía 

    .row.justify-content-center.mt-4
      .col-md-7
        p Todos los equipos de cómputo, partes y componentes vendidos por la empresa gozan de una garantía limitada única y exclusiva contra defectos de fabricación durante el período de garantía, siempre que se utilicen en condiciones normales de uso y de acuerdo con lo indicado en las instrucciones para usar con cada producto. El período de garantía y validez del producto es proporcionado por su fabricante.
        p El tiempo de respuesta depende del tiempo de entrega de la solución del fabricante. La garantía es válida a partir de la fecha de compra indicada en la factura, excluyendo todos los gastos de envío.
        p El fabricante determina las circunstancias que considera excluidas del alcance de la garantía de venta del dispositivo. La garantía quedará anulada si la condición del dispositivo cae dentro de estas excepciones.
      .col-md-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema3/img2.png', alt='alt')

    #t_3_2.mt-5
      h3 Seguridad y manipulación

    p El objetivo de la seguridad informática es garantizar la confidencialidad de la información y la continuidad del servicio, tratando de minimizar la vulnerabilidad de los sistemas, de la información contenida en ellos y de las redes privadas y sus recursos.
    p En este sentido, la seguridad informática sirve para proteger la información de amenazas o peligros, prevenir daños y reducir los riesgos asociados a los mismos.            
    p La seguridad de la información incluye la implementación de un conjunto de medidas técnicas destinadas a proteger la confidencialidad, integridad y disponibilidad de la información y también puede incluir otros atributos, como confiabilidad, responsabilidad y confiabilidad. Debe comprobar las siguientes propiedades:


    .row.justify-content-center.mt-5
      .col-md-5.mt-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img3.png', alt='alt')
      .col-md-7
        LineaTiempoD.color-acento-contenido.mt-5
          p(numero="1" titulo="Privacidad") La principal diferencia entre la seguridad de los datos y la privacidad de los datos, es que la privacidad es la garantía de que solo aquellos que están autorizados a acceder a los datos pueden hacerlo. La seguridad de los datos se trata de proteger contra amenazas maliciosas.
          p(numero="2" titulo="Integridad") Se puede definir como asegurar la exactitud y confiabilidad de la información. Garantizar la integridad de la información y los datos para evitar cualquier modificación no autorizada.
          p(numero="3" titulo="Disponibilidad ") Centrándonos en el campo de la seguridad informática, la disponibilidad de un computador es la característica o capacidad para garantizar la confiabilidad y el acceso oportuno de las personas autorizadas a los datos y recursos que los sustentan, es decir, solo de quienes los necesitan para desarrollar sus actividades.
          p(numero="4" titulo="Seguridad física") Se refiere a las barreras físicas y los mecanismos de control en el entorno del sistema informático, para proteger el #[i hardware] de las amenazas físicas. 
          p(numero="5" titulo="Seguridad lógica") La seguridad lógica se entiende como la aplicación de medidas para garantizar que solo las personas autorizadas a los sistemas de información, puedan acceder a los datos.
          p(numero="6" titulo="Seguridad en redes") La ciberseguridad son las políticas y prácticas que se implementan para prevenir y controlar el acceso no autorizado, el uso indebido, la modificación o la denegación de acceso a una red informática y sus recursos.
          p(numero="7" titulo="Seguridad informática") Se trata de la protección de la información y, en particular, de su tratamiento, con el fin de evitar la manipulación de datos y procesos por parte de personas no autorizadas.


    #t_3_3.mt-5
      h3  Política y normas legales
    .row.justify-content-center.mt-4
      .col-md-7
       p Las normas o políticas son vitales para toda forma de organización o empresa. Se incluye dentro de ellas al departamento de Informática, el cual es el órgano encargado de desarrollar las políticas necesarias para el uso de los recursos y servicios informáticos.
       p Es importante tener presente que se debe tener en cuenta algunos elementos para establecer las políticas de seguridad de la información como son: confidencialidad, integridad y disponibilidad.
       p Es necesario establecer políticas y estándares de seguridad informática en las empresas, con relación a los proveedores y clientes, configurando la estructura de la entidad y los elementos externos vinculados a esta.
       p Se deben establecer procedimientos para proteger la información y los activos del sistema de gestión de contenido, así como la tecnología mediante la cual se procesa, almacena y recupera la información a nivel de medios (cinta, disco, disco óptico, etc.). 
      .col-md-5.mt-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema3/img4.png', alt='alt')
       

</template>

<script>
export default {
  name: 'Tema3',
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
