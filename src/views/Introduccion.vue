<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-md-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/portada/introduccion.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Estimado aprendiz, a través del presente componente formativo conocerá sobre el soporte técnico a la infraestructura TI. El objetivo de soporte técnico es resolver solicitudes en la cotidianidad de una empresa o persona de manera constante, con el propósito de que estos usuarios puedan contar con unos equipos de cómputo y redes funcionales para un desempeño eficiente en sus labores. Las actualizaciones tecnológicas generan cambios que, de alguna manera, afectan a todo el sistema. Por lo tanto, en este componente conocerán sobre problemas de soporte, alistamientos a realizar, normas que tener en cuenta y #[span.text-italica hardware.]

    p.mt-5.mb-5 Se le invita a ver el video para documentarse sobre cada una de las temáticas que se desarrollan en este componente y que son fundamentales para su formación.
    p.mt-5.mb-5 ¡Muchos éxitos en este proceso de aprendizaje!

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
