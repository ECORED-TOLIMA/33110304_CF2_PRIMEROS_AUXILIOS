<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") La atención en primeros auxilios requiere no solo disposición solidaria, sino también competencias técnicas que permitan actuar de manera organizada, segura y efectiva ante una persona con alteración de la salud. En este componente, el aprendiz fortalecerá habilidades para realizar la valoración clínica estructurada, aplicar soporte vital básico y brindar atención inicial en situaciones traumáticas y emergencias médicas, conforme a protocolos establecidos.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Este espacio formativo se enfoca en la intervención directa sobre la persona lesionada. Para ello, es indispensable comprender los principios básicos de anatomía y fisiología, reconocer signos vitales normales y alterados, e interpretar hallazgos clínicos que orienten la toma de decisiones. El desarrollo temático avanza desde la comprensión del funcionamiento del cuerpo humano hasta la aplicación de técnicas específicas como la reanimación cardiopulmonar, el manejo de hemorragias, la inmovilización de lesiones y la atención de emergencias clínicas que comprometen funciones vitales. Asimismo, se abordará la movilización segura, el monitoreo continuo y la adecuada transferencia de la víctima al personal de salud.
        p.mb-0(data-aos="fade-down") De esta manera, el aprendiz no solo adquiere conocimientos, sino que desarrolla la capacidad de actuar con criterio técnico, responsabilidad y enfoque preventivo frente a situaciones que puedan poner en riesgo la vida.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/M0SRi6cJ0_I?si=iCFbipmHrA8fCeL3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
